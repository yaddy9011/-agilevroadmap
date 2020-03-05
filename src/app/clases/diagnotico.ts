import { TasksService } from '../services/tasks.service';
import { EvalResulService } from '../services/eval-resul.service';

export class Diagnostico {

    id_usr: string;
    _idEval: String;

    constructor(private taskService: TasksService,
        public IdEval: String,
        private EvalResulService: EvalResulService) {
        this.id_usr = localStorage.getItem("ACCESS_IDS");
        this._idEval = IdEval;
    }

    public GetDataEva(live) {

        console.log(live);

        const Data = {
            id_eval: this._idEval,
            id_usr: this.id_usr,
            live: live
        };

        this.taskService.GetDataEval(Data)
            .subscribe(evals => {

                //relación general de objetivos y prácticas

                let levels = evals.map((ev, i) => {
                
                    let nc = ev.relaop.nivel_contribucion;
                    let na = ev.prac.nivelapli;
                    let nc_title = "";
                    let na_title = "";
                    let na_new = 0;
                    let PremioNa: boolean
                    let PremioNc: boolean
                    let PNCpo = 0;

                    switch (nc) {
                        case 0:
                            nc_title = "Muy Bajo";
                            PNCpo = 0;
                            PremioNc = false;
                            break;
                        case 0.25:
                            nc_title = "Bajo";
                            PNCpo = 0;
                            PremioNc = false;
                            break;
                        case 0.50:
                            nc_title = "Medio";
                            PNCpo = 0.05;
                            PremioNc = true;
                            break;
                        case 0.75:
                            nc_title = "Alto";
                            PNCpo = 0.10;
                            PremioNc = true;
                            break;
                        case 1:
                            nc_title = "Muy Alto";
                            PNCpo = 0.15;
                            PremioNc = true;
                            break;
                    }

                    switch (na) {
                        case 0:
                            na_title = "No Aplica";
                            na_new = 0;
                            PremioNa = false;
                            break;
                        case 1:
                            na_title = "Muy Bajo";
                            na_new = 0;
                            PremioNa = true;
                            break;
                        case 2:
                            na_title = "Bajo";
                            na_new = 0.25;
                            PremioNa = true;
                            break;
                        case 3:
                            na_title = "Medio";
                            na_new = 0.50;
                            PremioNa = true;
                            break;
                        case 4:
                            na_title = "Alto";
                            na_new = 0.75;
                            PremioNa = true;
                            break;
                        case 5:
                            na_title = "Muy Alto";
                            na_new = 1;
                            PremioNa = false;
                            break;
                    }

                    const arraData = {
                        _idpe: ev.prac._id,
                        n_obj: Number(ev.n_obj),
                        n_prac: Number(ev.relaop.n_prac),
                        Descrip_obj: ev.Datos_obj.descrip,
                        Descrip_prac: ev.Datos_practicas.descripcion,
                        nc_t: nc_title,
                        nc: nc,
                        na_t: na_title,
                        na: na_new,
                        premioNa: PremioNa,
                        premioNc: PremioNc,
                        PNCpo: PNCpo
                    };
                    return arraData;
                });

                //para generar suma na, na, nd

                let arrSuma = levels.reduce((contador, objeto) => {
                    var new_na;
                    if (objeto.premioNa && objeto.premioNc == true) {
                        new_na = objeto.na + (objeto.PNCpo * objeto.na);
                    } else {
                        new_na = objeto.na
                    }
                    contador[objeto.n_obj] = (contador[objeto.n_obj] || 0) + new_na;
                    return contador;
                }, {});

                //conseguir el total de relaciones objetivos-prácticas

                const TotalRop = levels.reduce((contador, objeto) => {
                    contador[objeto.n_obj] = (contador[objeto.n_obj] || 0) + 1;
                    return contador;
                }, {});

                //quitamos los repetidos
                let sinRepetidos = levels.filter((valorActual, indiceActual, arreglo) => {
                    return arreglo.findIndex(valorDelArreglo => JSON.stringify(valorDelArreglo.n_obj) === JSON.stringify(valorActual.n_obj)) === indiceActual
                });

                // mapeamos los datos de los objetivos y el diagnóstico

                let mapObjetivos = sinRepetidos.map((mo, i) => {
                    let PorcentajeDiagnostic = Math.round(Number(100 / (TotalRop[mo.n_obj] / arrSuma[mo.n_obj])));
                    const DataObj = {
                        n_obj: mo.n_obj,
                        TexObj: mo.Descrip_obj,
                        pd: PorcentajeDiagnostic
                    };
                    return DataObj;
                });

                // reduce para obtener el promedio de agilidad por objetivos

                var total_pdo = mapObjetivos.reduce(function (contador, current) {
                    contador = contador + current.pd;
                    return contador;
                }, 0);

                var DiagnosticAgilityByObjetivos = Math.round(total_pdo / mapObjetivos.length);
                this.EvalResulService.DataEvalObjetivos(mapObjetivos);
                this.EvalResulService.DataEvalPracticas(levels);
                this.EvalResulService.DataAgilidad(DiagnosticAgilityByObjetivos);

            });
    }

}