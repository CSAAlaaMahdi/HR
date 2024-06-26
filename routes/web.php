<?php

use App\Http\Controllers\ActivityController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Admin\LoginController;
use App\Http\Controllers\Admin\Admin;
use App\Http\Controllers\Admin\DashboardMain;
use App\Http\Controllers\AdministrationOrdersController;
use App\Http\Controllers\ArticlesController;
use App\Http\Controllers\CertificationsController;
use App\Http\Controllers\ChildrenController;
use App\Http\Controllers\ComityController;
use App\Http\Controllers\DisapearController;
use App\Http\Controllers\DispatchController;
use App\Http\Controllers\EmployeesAttachmentsController;
use App\Http\Controllers\EmployeesController;
use App\Http\Controllers\EmployeesReportController;
use App\Http\Controllers\ItemsController;
use App\Http\Controllers\ItemsGroupsController;
use App\Http\Controllers\JobsController;
use App\Http\Controllers\PlacesController;
use App\Http\Controllers\PositionsController;
use App\Http\Controllers\ResearchesController;
use App\Http\Controllers\SupervisorsController;
use App\Http\Controllers\ThanksController;
use App\Http\Controllers\UserGroupPermissionsController;
use App\Http\Controllers\UserPermissionsController;
use App\Http\Controllers\UsersController;
use App\Http\Controllers\VacationsController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// Route::get('/', function () {
//     return view('welcome');
// });
Route::get('/', [LoginController::class, 'index'])->name('login');
Route::get('/login/checking', [LoginController::class, 'checking']);
// Route::get('ToOut/logOut', [Admin::class, 'logOut'])->name('ToOut/logOut');


Route::controller(Admin::class)->group(function () {
    Route::get('/dashboard', 'index')->name('home.index');
    Route::get('/dashboard/cardsdata', 'cardsData');
    Route::get('/dashboard/Certifications', 'GetCertifications');




});

// Route::get('/dashboard', [\App\Http\Controllers\Admin\Admin::class, 'index'])->name('home.index');
Route::resources([
    'users' => UsersController::class,
    'employees' => EmployeesController::class,
    'certifications' => CertificationsController::class,
    'comity' => ComityController::class,
    'jobs' => JobsController::class,
    'supervisors' => SupervisorsController::class,
    'positions' => PositionsController::class,
    'vacations' => VacationsController::class,
    'thanks' => ThanksController::class,
    'activity' => ActivityController::class,
    'researches' => ResearchesController::class,
    'children' => ChildrenController::class,
    'articles' => ArticlesController::class,
    'places' => PlacesController::class,
    'administrationOrders' => AdministrationOrdersController::class,
    'disapear' => DisapearController::class,
    'dispatch' => DispatchController::class,
    'userGroupPermissions' => UserGroupPermissionsController::class,
    'userPermissions'  => UserPermissionsController::class,
    'employeesAttachments' => EmployeesAttachmentsController::class,
    'employeesReport' => EmployeesReportController::class,
    'itemsGroups' => ItemsGroupsController::class,
    'items' => ItemsController::class,


]);
Route::get('usersfill/filldata', [UsersController::class, 'filldata']);
Route::get('employeesfill/filldata', [EmployeesController::class, 'filldata']);
Route::get('certificationsfill/filldata', [CertificationsController::class, 'filldata']);
Route::get('comityfill/filldata', [ComityController::class, 'filldata']);
Route::get('jobsfill/filldata', [JobsController::class, 'filldata']);
Route::get('supervisorsfill/filldata', [SupervisorsController::class, 'filldata']);
Route::get('positionsfill/filldata', [PositionsController::class, 'filldata']);
Route::get('vacationsfill/filldata', [VacationsController::class, 'filldata']);
Route::get('thanksfill/filldata', [ThanksController::class, 'filldata']);
Route::get('activityfill/filldata', [ActivityController::class, 'filldata']);
Route::get('researchesfill/filldata', [ResearchesController::class, 'filldata']);
Route::get('childrenfill/filldata', [ChildrenController::class, 'filldata']);
Route::get('articlesfill/filldata', [ArticlesController::class, 'filldata']);
Route::get('placesfill/filldata', [PlacesController::class, 'filldata']);
Route::get('disapearfill/filldata', [DisapearController::class, 'filldata']);
Route::get('dispatchfill/filldata', [DispatchController::class, 'filldata']);
Route::get('itemsGroupsfill/filldata', [ItemsGroupsController::class, 'filldata']);
Route::get('itemsfill/filldata', [ItemsController::class, 'filldata']);
Route::get('administrationOrdersfill/filldata', [AdministrationOrdersController::class, 'filldata']);
Route::get('userGroupPermissionsfill/filldata', [UserGroupPermissionsController::class, 'filldata']);
Route::get('employeesAttachmentsfill/filldata', [EmployeesAttachmentsController::class, 'filldata']);
Route::get('userPermissionsfill/filldata', [UserPermissionsController::class, 'filldata']);
Route::get('userPermissionsGet/GetForms', [UserPermissionsController::class, 'GetForms']);
Route::post('administrationImageDelete/DeleteImage', [AdministrationOrdersController::class, 'DeleteImages']);
Route::post('childrenDelete/DeleteImage', [ChildrenController::class, 'DeleteImages']);
Route::post('thanksDelete/DeleteImage', [ThanksController::class, 'DeleteImages']);
Route::post('vacationsDelete/DeleteImage', [VacationsController::class, 'DeleteImages']);
Route::post('jobsDelete/DeleteImage', [JobsController::class, 'DeleteImages']);
Route::post('certificationsDelete/DeleteImage', [CertificationsController::class, 'DeleteImages']);
Route::post('comityDelete/DeleteImage', [ComityController::class, 'DeleteImages']);
Route::post('supervisorsDelete/DeleteImage', [SupervisorsController::class, 'DeleteImages']);
Route::post('positionsDelete/DeleteImage', [PositionsController::class, 'DeleteImages']);
Route::post('activityDelete/DeleteImage', [ActivityController::class, 'DeleteImages']);
Route::post('articlesDelete/DeleteImage', [ArticlesController::class, 'DeleteImages']);
Route::post('researchesDelete/DeleteImage', [ResearchesController::class, 'DeleteImages']);
Route::post('employeesDelete/DeleteImage', [EmployeesController::class, 'DeleteImages']);
Route::post('disapearDelete/DeleteImage', [DisapearController::class, 'DeleteImages']);
Route::post('dispatchDelete/DeleteImage', [DispatchController::class, 'DeleteImages']);
Route::post('employeesAttachmentsDelete/DeleteImage', [EmployeesAttachmentsController::class, 'DeleteImages']);


Route::get('dashboardmainfill/filldata', [DashboardMain::class, 'filldata']);
Route::get('dashboardmainPermissions/Permissions', [DashboardMain::class, 'getPermissions']);
Route::get('dashboardmainCards/CardsData', [DashboardMain::class, 'CardsData']);


Route::get('itemsGroupsSetCode/setCode', [ItemsGroupsController::class, 'setCode']);
Route::get('ItemsGroupCheck/CheckRoot', [ItemsGroupsController::class, 'CheckRoot']);
Route::get('itemsSetCode/setCode', [ItemsController::class, 'setCode']);
Route::get('itemsCheck/CheckRoot', [ItemsController::class, 'CheckRoot']);


// Permissions ...
// Route::get('employeesPer/Permissions', [EmployeesController::class, 'getPermissions']);
