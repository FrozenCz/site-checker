import {Injectable} from "@angular/core";
import {Apollo} from "apollo-angular";
import {apolloOptionsFactory} from "../graphql.provider";

@Injectable({providedIn: 'root'})
export class GraphqlFactory {

  constructor(private apollo: Apollo) {


    const defaultOptions = apolloOptionsFactory();
    apollo.createNamed('test', {...defaultOptions});
  }

}
