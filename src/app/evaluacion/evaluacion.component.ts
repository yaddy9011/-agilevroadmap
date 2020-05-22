import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { TasksService } from '../services/tasks.service';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Eval } from '../clases/evaluacionbyobj';
import { obj } from '../clases/obj';
import { Practica } from '../clases/practica';
import { Rop } from '../clases/rop';
import { Router } from '@angular/router';
import { MatPaginator } from '@angular/material';

@Component({
  selector: 'app-evaluacion',
  templateUrl: './evaluacion.component.html',
  styleUrls: ['./evaluacion.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ]
})

export class EvaluacionComponent implements OnInit {



  p: number = 1;
  newarrs: Eval[];
  idst: string;
  popupVisible = false;
  selectvalue = null;


  constructor(private authService: AuthService, private router: Router, private taskService: TasksService, public dialog: MatDialog) {
    this.idst = localStorage.getItem("ACCESS_IDS");
    this.GetEvalByUSR();
  }

  ngOnInit() {

  }

  GenerarEvaluacion(e) {
    this.InsertEval(e);
  }

  InsertEval(e) {
    let DataEval = {
      id: this.idst
    }

    this.authService.GuardarEvaluacion(DataEval).subscribe(res => {
      this.GetEvalByUSR();
    });

  }

  GetEvalByUSR() {
    this.taskService.getEvalByObj(this.idst)
      .subscribe(evals => {
        this.newarrs = evals;
      });
  }

  EliminarEval(id) {
    this.taskService.DeleteEval(id)
      .subscribe(evals => {
        console.log(evals);
        this.GetEvalByUSR();
        // location.reload();
      });

  }



}