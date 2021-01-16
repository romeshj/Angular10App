import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ShoppingComponent } from './shopping/shopping.component';
import { ShoppingNComponent } from './shopping-n/shopping-n.component';
import { RecipesComponent } from './shopping/recipes/recipes.component';
import { ShoppingListComponent } from './shopping/shopping-list/shopping-list.component';
import { ServerComponent } from './server/server.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RecipeStartComponent } from './shopping/recipes/recipe-start/recipe-start.component';
import { RecipeDetailComponent } from './shopping/recipes/recipe-detail/recipe-detail.component';
import { RecipeEditComponent } from './shopping/recipes/recipe-edit/recipe-edit.component';
import { ProductsComponent } from './products/products.component';
import { ProductDetailComponent } from './products/product-detail/product-detail.component';
import { ProductStartComponent } from './products/product-start/product-start.component';
import { ProductOverviewComponent } from './products/product-detail/product-overview/product-overview.component';
import { ProductSpecificationsComponent } from './products/product-detail/product-specifications/product-specifications.component';
import { TemplateFormComponent } from './forms/template-form/template-form.component';
import { FormValidationsSubmitComponent } from './forms/form-validations-submit/form-validations-submit.component';
import { FormModelUserComponent } from './forms/form-model-user/form-model-user.component';
import { ReactiveFormsComponent } from './forms/reactive-forms/reactive-forms.component';
import { ReactiveFormsSubmitButtonComponent } from './forms/reactive-forms-submit-button/reactive-forms-submit-button.component';
import { ReactiveFormsSubmitTouchedComponent } from './forms/reactive-forms-submit-touched/reactive-forms-submit-touched.component';
import { ReactiveFormsSubmitInvalidComponent } from './forms/reactive-forms-submit-invalid/reactive-forms-submit-invalid.component';
import { ReactiveFormValidationServiceComponent } from './forms/reactive-form-validation-service/reactive-form-validation-service.component';
import { PipeExampleComponent } from './pipes/pipe-example/pipe-example.component';
import { PostsComponent } from './http/posts/posts.component';
import { PostsServicesComponent } from './http/posts-services/posts-services.component';
import { RecipeResolverService } from './shopping/service/recipe-resolver.service';
import { AuthComponent } from './auth/auth.component';
import { AuthGuard } from './services/auth.guard';

const routes: Routes = [
{path: '', component: LoginComponent, pathMatch: 'full' },
{path: 'register', component: RegisterComponent},
{path: 'forgotpassword', component: ForgotPasswordComponent},
{
	path: 'dashboard', component: ShoppingComponent, children : [
	    {path: '', redirectTo: '/dashboard/recipes', canActivate : [AuthGuard], pathMatch: 'full'},
		{
			path: 'recipes', component: RecipesComponent , canActivate : [AuthGuard],  children : [
				{path: '', component: RecipeStartComponent},
				{path: 'new', component: RecipeEditComponent},
				{path: ':id', component: RecipeDetailComponent, resolve: [RecipeResolverService]},
				{path: ':id/edit', component: RecipeEditComponent, resolve: [RecipeResolverService]}
			]
		},
		{path: 'shoppinglist', component: ShoppingListComponent},		
		{path: 'auth', component: AuthComponent}
	]
},
{path: 'dashboardN', component: ShoppingNComponent, pathMatch: 'full'},
{path: 'server', component: ServerComponent, pathMatch: 'full'},
{
	path: 'products', component: ProductsComponent, children : [
	    {path: '', component: ProductStartComponent, pathMatch: 'full'},
		{
			path: ':pId', component: ProductDetailComponent, children : [
			{ path: 'overview', component: ProductOverviewComponent },
			{ path: 'specifications', component: ProductSpecificationsComponent }
		]}
	]

},
{path: 'templateform', component: TemplateFormComponent, pathMatch: 'full'},
{path: 'templateformsubmit', component: FormValidationsSubmitComponent, pathMatch: 'full'},
{path: 'formmodelusersubmit', component: FormModelUserComponent, pathMatch: 'full'},
{path: 'reactiveforms', component: ReactiveFormsComponent, pathMatch: 'full'},
{path: 'reactiveformssubmit', component: ReactiveFormsSubmitButtonComponent, pathMatch: 'full'},
{path: 'reactiveformssubmittouched', component: ReactiveFormsSubmitTouchedComponent, pathMatch: 'full'},
{path: 'reactiveformssubmitinvalid', component: ReactiveFormsSubmitInvalidComponent, pathMatch: 'full'},
{path: 'reactiveformsservice', component: ReactiveFormValidationServiceComponent, pathMatch: 'full'},
{path: 'pipeexample', component: PipeExampleComponent, pathMatch: 'full'},
{path: 'httpexample', component: PostsComponent, pathMatch: 'full'},
{path: 'httpservicexample', component: PostsServicesComponent, pathMatch: 'full'},
{path: '**', component: NotFoundComponent, pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
