import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { IAbonne } from 'app/shared/model/abonne.model';
import { IAbonnement } from 'app/shared/model/abonnement.model';
import { AbonnementService } from '../abonnement/abonnement.service';

@Component({
  selector: 'jhi-abonne-detail',
  templateUrl: './abonne-detail.component.html',
})
export class AbonneDetailComponent implements OnInit {
  abonne: IAbonne | null = null;
  abonnements?: IAbonnement[];

  constructor(protected activatedRoute: ActivatedRoute, protected abonnementService: AbonnementService) {}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({ abonne }) => {
      this.abonne = abonne;
      this.abonnementService.query().subscribe((res: HttpResponse<IAbonnement[]>) => (this.abonnements = res.body || []));
    });
  }

  previousState(): void {
    window.history.back();
  }
}
