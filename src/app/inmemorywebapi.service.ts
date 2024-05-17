import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { supply } from './supply';
@Injectable({
  providedIn: 'root'
})
export class InmemorywebapiService implements InMemoryDbService {

  createDb(){ 
    const mysupply=[
        { id: 1,name: "Pencils",quantity: 100,reorderLevel: 20},
        { id: 2, name: "Notebooks", quantity: 50, reorderLevel: 10 },
        { id: 3, name: "Erasers", quantity: 80, reorderLevel: 15 },
        { id: 4, name: "Rulers", quantity: 30, reorderLevel: 10 },
        { id: 5, name: "Markers", quantity: 40, reorderLevel: 15 },
        { id: 6, name: "Scissors", quantity: 25, reorderLevel: 5 }
    ]
    return {mysupply};
  }
  genId(mysupply: supply[]): number {
    return mysupply.length > 0 ? Math.max(...mysupply.map(s => s.id)) + 1 : 1;
  }
}
