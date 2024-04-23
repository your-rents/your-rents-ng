import { Injectable, OnDestroy } from '@angular/core';
import { MatPaginatorIntl } from '@angular/material/paginator';
import { TranslocoService } from '@jsverse/transloco';
import { Subscription } from 'rxjs';

@Injectable()
export class TranslocoPaginatorIntl extends MatPaginatorIntl implements OnDestroy {
  private updateLabelsSubscription: Subscription;

  constructor(private translocoService: TranslocoService) {
    super();
    this.updateLabelsSubscription = this.translocoService.selectTranslateObject('paginator').subscribe((paginator) => {
      this.firstPageLabel = paginator.first_page;
      this.itemsPerPageLabel = paginator.items_per_page;
      this.lastPageLabel = paginator.last_page;
      this.nextPageLabel = paginator.next_page;
      this.previousPageLabel = paginator.previous_page;
      this.changes.next();
    });
  }

  ngOnDestroy(): void {
    this.updateLabelsSubscription.unsubscribe();
  }

  override getRangeLabel = (page: number, pageSize: number, length: number): string => {
    if (length === 0) {
      return this.translocoService.translate('paginator.page', { page: 1, amountPages: 1});
    }
    const amountPages = Math.ceil(length / pageSize);
    return this.translocoService.translate('paginator.page', { page: page + 1, amountPages});
  }

}
