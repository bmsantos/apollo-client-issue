import {Component} from '@angular/core';
import {Apollo} from "apollo-angular";
import gql from 'graphql-tag';
import {createHttpLink, HttpLink} from 'apollo-link-http';
import {InMemoryCache} from 'apollo-cache-inmemory';
import Options = HttpLink.Options;


export const query = gql`
  query CountriesQuery($language: String!) {
    countries(language: $language) {
      code
      name
      states {
        code
        name
        __typename
      }
      __typename
    }
  }
`;

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  result: string;
  error: string;

  private _cache = new InMemoryCache();

  constructor(private apollo: Apollo) {
    this.initialize();
  }

  initialize() {
    const httpLink = createHttpLink(<Options>{uri: 'http://localhost:5555/graphql'});
    const options = {
      link: httpLink,
      cache: this._cache
    };
    this.apollo.create(options);
  }

  call200() {
    this.fetchCountries('en');
  }

  call403NoErrors() {
    this.fetchCountries('es');
  }

  call403NullErrors() {
    this.fetchCountries('jp');
  }

  call403WithErrors() {
    this.fetchCountries('pt');
  }

  private fetchCountries(language: string) {
    this.result = null;
    this.error = null;
    this._cache.reset();
    this.apollo.query({
      query: query,
      variables: {
        language
      }
    }).subscribe(result => this.result = JSON.stringify(result), error => this.error = JSON.stringify(error));
  }
}
