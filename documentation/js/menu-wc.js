'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">dynamic-user-dashboard documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-bs-toggle="collapse" ${ isNormalMode ?
                                'data-bs-target="#modules-links"' : 'data-bs-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-AppModule-5b57395d8815e5da982f55a156a280f042d703d6d58a225010d8b06aaf31b19dbb502c39d52a31a10f68f632e8d21d01a9b8d1afdafb60200776c66a3cf35deb"' : 'data-bs-target="#xs-components-links-module-AppModule-5b57395d8815e5da982f55a156a280f042d703d6d58a225010d8b06aaf31b19dbb502c39d52a31a10f68f632e8d21d01a9b8d1afdafb60200776c66a3cf35deb"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-5b57395d8815e5da982f55a156a280f042d703d6d58a225010d8b06aaf31b19dbb502c39d52a31a10f68f632e8d21d01a9b8d1afdafb60200776c66a3cf35deb"' :
                                            'id="xs-components-links-module-AppModule-5b57395d8815e5da982f55a156a280f042d703d6d58a225010d8b06aaf31b19dbb502c39d52a31a10f68f632e8d21d01a9b8d1afdafb60200776c66a3cf35deb"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LoadingSpinnerComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LoadingSpinnerComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link" >AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/CoreModule.html" data-type="entity-link" >CoreModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-CoreModule-cdb1c01666c0fbcea08e17f204df69a2ef9b3f4d74e6892cf665423004e39cce12b3652f1678e91c54ec746d2e0369e7f6b7b125962f0f6e9e64d5708b030a3b"' : 'data-bs-target="#xs-injectables-links-module-CoreModule-cdb1c01666c0fbcea08e17f204df69a2ef9b3f4d74e6892cf665423004e39cce12b3652f1678e91c54ec746d2e0369e7f6b7b125962f0f6e9e64d5708b030a3b"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-CoreModule-cdb1c01666c0fbcea08e17f204df69a2ef9b3f4d74e6892cf665423004e39cce12b3652f1678e91c54ec746d2e0369e7f6b7b125962f0f6e9e64d5708b030a3b"' :
                                        'id="xs-injectables-links-module-CoreModule-cdb1c01666c0fbcea08e17f204df69a2ef9b3f4d74e6892cf665423004e39cce12b3652f1678e91c54ec746d2e0369e7f6b7b125962f0f6e9e64d5708b030a3b"' }>
                                        <li class="link">
                                            <a href="injectables/HTTPStatus.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HTTPStatus</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/DataModule.html" data-type="entity-link" >DataModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/IconsProviderModule.html" data-type="entity-link" >IconsProviderModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/LayoutModule.html" data-type="entity-link" >LayoutModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-LayoutModule-bb248e7ee83aabe8116a0cf16918229f3dc1fbe1042d67d9f3ba4eaa3d9fcf36753d3d25a87e860bb952c47d66bb619f335212413933461e770d243207433d13"' : 'data-bs-target="#xs-components-links-module-LayoutModule-bb248e7ee83aabe8116a0cf16918229f3dc1fbe1042d67d9f3ba4eaa3d9fcf36753d3d25a87e860bb952c47d66bb619f335212413933461e770d243207433d13"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-LayoutModule-bb248e7ee83aabe8116a0cf16918229f3dc1fbe1042d67d9f3ba4eaa3d9fcf36753d3d25a87e860bb952c47d66bb619f335212413933461e770d243207433d13"' :
                                            'id="xs-components-links-module-LayoutModule-bb248e7ee83aabe8116a0cf16918229f3dc1fbe1042d67d9f3ba4eaa3d9fcf36753d3d25a87e860bb952c47d66bb619f335212413933461e770d243207433d13"' }>
                                            <li class="link">
                                                <a href="components/ContainerComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ContainerComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/LayoutRoutingModule.html" data-type="entity-link" >LayoutRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/SharedModule.html" data-type="entity-link" >SharedModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/UsersModule.html" data-type="entity-link" >UsersModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-UsersModule-f3f09f5acbff7478146a4a1a899e662511af34df4f38b7d5bd00c2c1942567bc2d2bc60efdedebd12621cec5011bb90f6d0a09401d5f34767f1e09eced05b08a"' : 'data-bs-target="#xs-components-links-module-UsersModule-f3f09f5acbff7478146a4a1a899e662511af34df4f38b7d5bd00c2c1942567bc2d2bc60efdedebd12621cec5011bb90f6d0a09401d5f34767f1e09eced05b08a"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-UsersModule-f3f09f5acbff7478146a4a1a899e662511af34df4f38b7d5bd00c2c1942567bc2d2bc60efdedebd12621cec5011bb90f6d0a09401d5f34767f1e09eced05b08a"' :
                                            'id="xs-components-links-module-UsersModule-f3f09f5acbff7478146a4a1a899e662511af34df4f38b7d5bd00c2c1942567bc2d2bc60efdedebd12621cec5011bb90f6d0a09401d5f34767f1e09eced05b08a"' }>
                                            <li class="link">
                                                <a href="components/UsersDetailsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsersDetailsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/UsersListComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsersListComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/UsersRoutingModule.html" data-type="entity-link" >UsersRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/WelcomeModule.html" data-type="entity-link" >WelcomeModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-WelcomeModule-be51405ad3b15f1c7a6ca39ada8832a0862ad42d80f36fd5c804a06e33fabe3e40ca98501038d157301f60068dedc076cd4dd7ad1bfc29d145d705b476b28979"' : 'data-bs-target="#xs-components-links-module-WelcomeModule-be51405ad3b15f1c7a6ca39ada8832a0862ad42d80f36fd5c804a06e33fabe3e40ca98501038d157301f60068dedc076cd4dd7ad1bfc29d145d705b476b28979"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-WelcomeModule-be51405ad3b15f1c7a6ca39ada8832a0862ad42d80f36fd5c804a06e33fabe3e40ca98501038d157301f60068dedc076cd4dd7ad1bfc29d145d705b476b28979"' :
                                            'id="xs-components-links-module-WelcomeModule-be51405ad3b15f1c7a6ca39ada8832a0862ad42d80f36fd5c804a06e33fabe3e40ca98501038d157301f60068dedc076cd4dd7ad1bfc29d145d705b476b28979"' }>
                                            <li class="link">
                                                <a href="components/WelcomeComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >WelcomeComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/WelcomeRoutingModule.html" data-type="entity-link" >WelcomeRoutingModule</a>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#classes-links"' :
                            'data-bs-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/DefaultService.html" data-type="entity-link" >DefaultService</a>
                            </li>
                            <li class="link">
                                <a href="classes/UiLoader.html" data-type="entity-link" >UiLoader</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#injectables-links"' :
                                'data-bs-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/HTTPStatus.html" data-type="entity-link" >HTTPStatus</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UserEffects.html" data-type="entity-link" >UserEffects</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UserService.html" data-type="entity-link" >UserService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#interceptors-links"' :
                            'data-bs-target="#xs-interceptors-links"' }>
                            <span class="icon ion-ios-swap"></span>
                            <span>Interceptors</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="interceptors-links"' : 'id="xs-interceptors-links"' }>
                            <li class="link">
                                <a href="interceptors/HTTPListener.html" data-type="entity-link" >HTTPListener</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#interfaces-links"' :
                            'data-bs-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/APIResponse.html" data-type="entity-link" >APIResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/AppState.html" data-type="entity-link" >AppState</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/EnvironmentInterface.html" data-type="entity-link" >EnvironmentInterface</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Pageable.html" data-type="entity-link" >Pageable</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/PageRequest.html" data-type="entity-link" >PageRequest</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/PageResult.html" data-type="entity-link" >PageResult</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SharedState.html" data-type="entity-link" >SharedState</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Sort.html" data-type="entity-link" >Sort</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/User.html" data-type="entity-link" >User</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/UserSearchResult.html" data-type="entity-link" >UserSearchResult</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/UserState.html" data-type="entity-link" >UserState</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#miscellaneous-links"'
                            : 'data-bs-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank" rel="noopener noreferrer">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});