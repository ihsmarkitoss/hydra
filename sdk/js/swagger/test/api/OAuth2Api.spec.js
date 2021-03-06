/**
 * Hydra OAuth2 & OpenID Connect Server
 * Please refer to the user guide for in-depth documentation: https://ory.gitbooks.io/hydra/content/   Hydra offers OAuth 2.0 and OpenID Connect Core 1.0 capabilities as a service. Hydra is different, because it works with any existing authentication infrastructure, not just LDAP or SAML. By implementing a consent app (works with any programming language) you build a bridge between Hydra and your authentication infrastructure. Hydra is able to securely manage JSON Web Keys, and has a sophisticated policy-based access control you can use if you want to. Hydra is suitable for green- (new) and brownfield (existing) projects. If you are not familiar with OAuth 2.0 and are working on a greenfield project, we recommend evaluating if OAuth 2.0 really serves your purpose. Knowledge of OAuth 2.0 is imperative in understanding what Hydra does and how it works.   The official repository is located at https://github.com/ory/hydra   ### Important REST API Documentation Notes  The swagger generator used to create this documentation does currently not support example responses. To see request and response payloads click on **\"Show JSON schema\"**: ![Enable JSON Schema on Apiary](https://storage.googleapis.com/ory.am/hydra/json-schema.png)   The API documentation always refers to the latest tagged version of ORY Hydra. For previous API documentations, please refer to https://github.com/ory/hydra/blob/<tag-id>/docs/api.swagger.yaml - for example:  0.9.13: https://github.com/ory/hydra/blob/v0.9.13/docs/api.swagger.yaml 0.8.1: https://github.com/ory/hydra/blob/v0.8.1/docs/api.swagger.yaml
 *
 * OpenAPI spec version: Latest
 * Contact: hi@ory.am
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.2.3
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.HydraOAuth2OpenIdConnectServer);
  }
}(this, function(expect, HydraOAuth2OpenIdConnectServer) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new HydraOAuth2OpenIdConnectServer.OAuth2Api();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('OAuth2Api', function() {
    describe('acceptOAuth2ConsentRequest', function() {
      it('should call acceptOAuth2ConsentRequest successfully', function(done) {
        //uncomment below and update the code to test acceptOAuth2ConsentRequest
        //instance.acceptOAuth2ConsentRequest(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createOAuth2Client', function() {
      it('should call createOAuth2Client successfully', function(done) {
        //uncomment below and update the code to test createOAuth2Client
        //instance.createOAuth2Client(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteOAuth2Client', function() {
      it('should call deleteOAuth2Client successfully', function(done) {
        //uncomment below and update the code to test deleteOAuth2Client
        //instance.deleteOAuth2Client(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getOAuth2Client', function() {
      it('should call getOAuth2Client successfully', function(done) {
        //uncomment below and update the code to test getOAuth2Client
        //instance.getOAuth2Client(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getOAuth2ConsentRequest', function() {
      it('should call getOAuth2ConsentRequest successfully', function(done) {
        //uncomment below and update the code to test getOAuth2ConsentRequest
        //instance.getOAuth2ConsentRequest(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getWellKnown', function() {
      it('should call getWellKnown successfully', function(done) {
        //uncomment below and update the code to test getWellKnown
        //instance.getWellKnown(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('introspectOAuth2Token', function() {
      it('should call introspectOAuth2Token successfully', function(done) {
        //uncomment below and update the code to test introspectOAuth2Token
        //instance.introspectOAuth2Token(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('listOAuth2Clients', function() {
      it('should call listOAuth2Clients successfully', function(done) {
        //uncomment below and update the code to test listOAuth2Clients
        //instance.listOAuth2Clients(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('oauthAuth', function() {
      it('should call oauthAuth successfully', function(done) {
        //uncomment below and update the code to test oauthAuth
        //instance.oauthAuth(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('oauthToken', function() {
      it('should call oauthToken successfully', function(done) {
        //uncomment below and update the code to test oauthToken
        //instance.oauthToken(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('rejectOAuth2ConsentRequest', function() {
      it('should call rejectOAuth2ConsentRequest successfully', function(done) {
        //uncomment below and update the code to test rejectOAuth2ConsentRequest
        //instance.rejectOAuth2ConsentRequest(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('revokeOAuth2Token', function() {
      it('should call revokeOAuth2Token successfully', function(done) {
        //uncomment below and update the code to test revokeOAuth2Token
        //instance.revokeOAuth2Token(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateOAuth2Client', function() {
      it('should call updateOAuth2Client successfully', function(done) {
        //uncomment below and update the code to test updateOAuth2Client
        //instance.updateOAuth2Client(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('wellKnown', function() {
      it('should call wellKnown successfully', function(done) {
        //uncomment below and update the code to test wellKnown
        //instance.wellKnown(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
