<?php

use App\Http\Controllers\ActivityController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Admin\LoginController;
use App\Http\Controllers\Admin\Admin;
use App\Http\Controllers\Admin\DashboardMain;
use App\Http\Controllers\CertificationsController;
use App\Http\Controllers\ComityController;
use App\Http\Controllers\EmployeesController;
use App\Http\Controllers\JobsController;
use App\Http\Controllers\PositionsController;
use App\Http\Controllers\SupervisorsController;
use App\Http\Controllers\ThanksController;
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


Route::controller(Admin::class)->group(function () {
    Route::get('/dashboard', 'index')->name('home.index');
    

});
Route::controller(DashboardMain::class)->group(function () {
    Route::get('/dashboardmain', 'index')->name('main.index');
    Route::get('dashboardmain/cardsdata', 'cardsData')->name('main.cardsdata');


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
