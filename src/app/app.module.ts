import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { CommonModule } from '@angular/common';
import * as $ from 'jquery';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RegisterComponent } from './register/register.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';

import { UserService } from './services/user.service';
import { CheckCredentialsService } from './services/check-credentials.service';
import { HeaderComponent } from './shopping/header/header.component';
import { ShoppingComponent } from './shopping/shopping.component';
import { RecipesComponent } from './shopping/recipes/recipes.component';
import { RecipeListComponent } from './shopping/recipes/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './shopping/recipes/recipe-detail/recipe-detail.component';
import { ShoppingListComponent } from './shopping/shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping/shopping-list/shopping-edit/shopping-edit.component';
import { RecipeItemComponent } from './shopping/recipes/recipe-list/recipe-item/recipe-item.component';
import { ServerComponent } from './server/server.component';
import { CockpitComponent } from './server/cockpit/cockpit.component';
import { ServerElementComponent } from './server/server-element/server-element.component';
import { HighlightDirective } from './directives/highlight.directive';
import { HighlightRendererDirective } from './directives/highlight-renderer.directive';
import { HighlightHostBindingDirective } from './directives/highlight-host-binding.directive';
import { HeaderNComponent } from './shopping-n/header-n/header-n.component';
import { RecipesNComponent } from './shopping-n/recipes-n/recipes-n.component';
import { ShoppingNComponent } from './shopping-n/shopping-n.component';
import { ShoppingListNComponent } from './shopping-n/shopping-list-n/shopping-list-n.component';
import { RecipeDetailNComponent } from './shopping-n/recipes-n/recipe-detail-n/recipe-detail-n.component';
import { RecipeListNComponent } from './shopping-n/recipes-n/recipe-list-n/recipe-list-n.component';
import { RecipeItemNComponent } from './shopping-n/recipes-n/recipe-list-n/recipe-item-n/recipe-item-n.component';
import { ShoppingEditNComponent } from './shopping-n/shopping-list-n/shopping-edit-n/shopping-edit-n.component';
import { RecipeService } from './shopping/service/recipe.service';
import { ShoppingListService } from './shopping/service/shopping-list.service';
import { RecipeStartComponent } from './shopping/recipes/recipe-start/recipe-start.component';
import { RecipeEditComponent } from './shopping/recipes/recipe-edit/recipe-edit.component';
import { ProductsComponent } from './products/products.component';
import { ProductItemComponent } from './products/product-item/product-item.component';
import { ProductDetailComponent } from './products/product-detail/product-detail.component';
import { ProductsService } from './products/products.service';
import { ProductStartComponent } from './products/product-start/product-start.component';
import { ProductOverviewComponent } from './products/product-detail/product-overview/product-overview.component';
import { ProductSpecificationsComponent } from './products/product-detail/product-specifications/product-specifications.component';
import { TemplateFormComponent } from './forms/template-form/template-form.component';
import { FormValidationsSubmitComponent } from './forms/form-validations-submit/form-validations-submit.component';
import { FormModelUserComponent } from './forms/form-model-user/form-model-user.component';
import { MustMatchDirective } from './forms/directives/must-match.directive';
import { GteValidatorDirective } from './forms/directives/gte-validator.directive';
import { ReactiveFormsComponent } from './forms/reactive-forms/reactive-forms.component';
import { ReactiveFormsSubmitButtonComponent } from './forms/reactive-forms-submit-button/reactive-forms-submit-button.component';
import { ReactiveFormsSubmitTouchedComponent } from './forms/reactive-forms-submit-touched/reactive-forms-submit-touched.component';
import { ReactiveFormsSubmitInvalidComponent } from './forms/reactive-forms-submit-invalid/reactive-forms-submit-invalid.component';
import { ReactiveFormValidationServiceComponent } from './forms/reactive-form-validation-service/reactive-form-validation-service.component';
import { PipeExampleComponent } from './pipes/pipe-example/pipe-example.component';
import { ShortenPipe } from './pipes/shorten.pipe';
import { FilterPipe } from './pipes/filter.pipe';
import { PostsComponent } from './http/posts/posts.component';
import { PostsService } from './services/posts.service';
import { PostsServicesComponent } from './http/posts-services/posts-services.component';
import { HttpShoppingService } from './shopping/service/http-shopping.service';
import { AuthComponent } from './auth/auth.component';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';
import { AuthInterceptorService } from './services/auth-interceptor.service';
import { AuthGuard } from './services/auth.guard';
import { AlertComponent } from './alert/alert.component';
import { PlaceholderDirective } from './directives/placeholder.directive';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NotFoundComponent,
    RegisterComponent,
    ForgotPasswordComponent,
    HeaderComponent,
    ShoppingComponent,
    RecipesComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    RecipeItemComponent,
    ServerComponent,
    CockpitComponent,
    ServerElementComponent,
    HighlightDirective,
    HighlightRendererDirective,
    HighlightHostBindingDirective,
    HeaderNComponent,
    RecipesNComponent,
    ShoppingNComponent,
    ShoppingListNComponent,
    RecipeDetailNComponent,
    RecipeListNComponent,
    RecipeItemNComponent,
    ShoppingEditNComponent,
    RecipeStartComponent,
    RecipeEditComponent,
    ProductsComponent,
    ProductItemComponent,
    ProductDetailComponent,
    ProductStartComponent,
    ProductOverviewComponent,
    ProductSpecificationsComponent,
    TemplateFormComponent,
    FormValidationsSubmitComponent,
    FormModelUserComponent,
    MustMatchDirective,
    GteValidatorDirective,
    ReactiveFormsComponent,
    ReactiveFormsSubmitButtonComponent,
    ReactiveFormsSubmitTouchedComponent,
    ReactiveFormsSubmitInvalidComponent,
    ReactiveFormValidationServiceComponent,
    PipeExampleComponent,
    ShortenPipe,
    FilterPipe,
    PostsComponent,
    PostsServicesComponent,
    AuthComponent,
    LoadingSpinnerComponent,
    AlertComponent,
    PlaceholderDirective
  ],
  imports: [
    BrowserModule,
	FormsModule,
	ReactiveFormsModule,
	HttpClientModule,
    AppRoutingModule
  ],
  providers: [UserService, CheckCredentialsService, RecipeService, ShoppingListService, ProductsService, PostsService, HttpShoppingService, 
	{
		provide : HTTP_INTERCEPTORS,
		useClass : AuthInterceptorService,
		multi : true
	},
	AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
