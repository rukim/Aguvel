import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { datosAgua } from '../_modelos';

@Injectable()
export class AguaService {
    constructor(private http: HttpClient) {}

    getAll() {
        return this.http.get<datosAgua[]>(`/datosAgua`);
    }

    getById(id: number) {
        return this.http.get(`/datosAgua/` + id);
    }

    register(agua: datosAgua) {
        return this.http.post(`/datosAgua/register`, agua);
    }

    update(agua: datosAgua) {
        return this.http.put(`/datosAgua/` + agua.id, agua);
    }

    delete(id: number) {
        return this.http.delete(`/datosAgua/` + id);
    }
}