import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {SynonymeModel} from '../model/Synonyme.model';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SynonymeService {

  constructor(private http: HttpClient,
            ) {
  }

  // tslint:disable-next-line:no-inferrable-types
  baseurl: string = 'http://localhost:3000/';
  selectedSynonyme: SynonymeModel ;

  getAllSynonyme() {
    return this.http.get<SynonymeModel[]>(this.baseurl + 'synonymes');
  }

  getSynonymeById(id: string) {
    return this.http.get<SynonymeModel>(this.baseurl + 'synonymes' + '/' + id);
  }

  addSynonyme(Synonyme: SynonymeModel) {
    return this.http.post(this.baseurl + 'synonymes', {
      

  default_value: Synonyme.default_value  ,
  code: Synonyme.code ,
  hierarchy_code : Synonyme.hierarchy_code ,
  roles:  Synonyme.roles,
  validations : Synonyme.validations,
  required: Synonyme.required,
  variant: Synonyme.variant,
  description_translations: Synonyme.description_translations,
  label: Synonyme.label,
  label_translations  :Synonyme.label_translations,
  values : Synonyme.values,
  requirement_level: Synonyme.requirement_level,
  values_list :Synonyme.values_list,
  type: Synonyme.type,
  example : Synonyme.example,
  type_parameter: Synonyme.type_parameter,
  description :Synonyme.description

    })
  }

  deleteSynonyme(id: string) {
    return this.http.delete(this.baseurl + 'synonymes' + '/' + id)
  }


  updateSynonyme(Synonyme: SynonymeModel, id: String) {
    console.log(Synonyme._id)
    return this.http.put(this.baseurl + 'synonymes' + '/' + id, {
      default_value: Synonyme.default_value  ,
      code: Synonyme.code ,
      hierarchy_code : Synonyme.hierarchy_code ,
      roles:  Synonyme.roles,
      validations : Synonyme.validations,
      required: Synonyme.required,
      variant: Synonyme.variant,
      description_translations: Synonyme.description_translations,
      label: Synonyme.label,
      label_translations  :Synonyme.label_translations,
      values : Synonyme.values,
      requirement_level: Synonyme.requirement_level,
      values_list :Synonyme.values_list,
      type: Synonyme.type,
      example : Synonyme.example,
      type_parameter: Synonyme.type_parameter,
      description :Synonyme.description
    }
);
  }
}
