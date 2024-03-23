<?php


use App\Http\Controllers\AccountTreeController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Admin\LoginController;
use App\Http\Controllers\Admin\Admin;
use App\Http\Controllers\Admin\DashboardMain;
use App\Http\Controllers\BattreyController;
use App\Http\Controllers\BillBuyingController;
use App\Http\Controllers\BillBuyingItemsController;
use App\Http\Controllers\BillSaleController;
use App\Http\Controllers\BillSaleItemsController;
use App\Http\Controllers\BillsController;
use App\Http\Controllers\BillsSettingController;
use App\Http\Controllers\BondsController;
use App\Http\Controllers\BondsSettingController;
use App\Http\Controllers\BrandController;
use App\Http\Controllers\CarsInfoController;
use App\Http\Controllers\CompanyController;
use App\Http\Controllers\CountryController;
use App\Http\Controllers\CurrencyController;
use App\Http\Controllers\CustomerSupplierController;
use App\Http\Controllers\ItemController;
use App\Http\Controllers\ItemFiveController;
use App\Http\Controllers\ItemFourController;
use App\Http\Controllers\ItemsBarcodeController;
use App\Http\Controllers\ItemtwoController;
use App\Http\Controllers\KindController;
use App\Http\Controllers\ModelController;
use App\Http\Controllers\PermissionController;
use App\Http\Controllers\OrderMainController;
use App\Http\Controllers\OrderSecondaryController;
use App\Http\Controllers\ReportsController;
use App\Http\Controllers\SalesGroupController;
use App\Http\Controllers\StoriesTreeController;
use App\Http\Controllers\UnitnameController;
use App\Http\Controllers\ItemsTreeController;
use App\Http\Controllers\ItemThreeController;
use App\Http\Controllers\ReportBuyingBillController;
use App\Http\Controllers\ReportSalingBillController;
use App\Http\Controllers\UsersController;
use App\Http\Controllers\UsersGroupsController;
use App\Http\Controllers\VINController;
use App\Models\BondsSetting;

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
    Route::get('/dashboard/departmentMovements', 'departmentMovements')->name('dashboard.fetch');
    Route::get('/dashboard/monthMovements', 'monthsMovements')->name('dashboard.movements');

});
Route::controller(DashboardMain::class)->group(function () {
    Route::get('/dashboardmain', 'index')->name('main.index');
    Route::get('dashboardmain/cardsdata', 'cardsData')->name('main.cardsdata');


});
// Route::get('/dashboard', [\App\Http\Controllers\Admin\Admin::class, 'index'])->name('home.index');
Route::resources([
    'users'=>UsersController::class,
    'unitname'=>UnitnameController::class,
    'brand'=>BrandController::class,
    'battreys'=>BattreyController::class,
    'itemstoask'=>ItemController::class,
    'company'=>CompanyController::class,
    'country'=>CountryController::class,
    'currency'=>CurrencyController::class,
    'kind'=>KindController::class,
    'modell'=>ModelController::class,
    'customersupplier'=>CustomerSupplierController::class,
    'salesgroups'=>SalesGroupController::class,
    'accounttree'=>AccountTreeController::class,
    'permissions'=>PermissionController::class,
    'itemsTree'=>ItemsTreeController::class,
    'items'=>ItemtwoController::class,
    'ordermain'=>OrderMainController::class,
    'ordersecondary'=>OrderSecondaryController::class,
    'stories'=>StoriesTreeController::class,
    'itemFour'=>ItemFourController::class,
    'itemFive'=>ItemFiveController::class,
    'ItemThree'=>ItemThreeController::class,
    'VIN'=>VINController::class,
    'BillsBuying'=>BillsController::class,
    'BillsSaling'=>BillsController::class,
    'BillsOrdering'=>BillsController::class,
    'DeliveryBills'=>BillsController::class,
    'ReceiveBills'=>BillsController::class,
    'Bonds'=>BondsController::class,
    'BondsPayment'=>BondsController::class,
    'BondsBills'=>BondsController::class,
    'BondsStarter'=>BondsController::class,
    'BondsDoc'=>BondsController::class,
    'BillsSetting'=>BillsSettingController::class,
    'CarsInfo'=>CarsInfoController::class,
    'ItemsBarcode'=>ItemsBarcodeController::class,
    'usersgroups' => UsersGroupsController::class,
    'bondsSetting' =>BondsSettingController::class,
    'reportsSalingBillPrint'=>ReportSalingBillController::class,
    'reportsBuyingBillPrint'=>ReportBuyingBillController::class,

]);

#region Bills
Route::get('BillsBuyingfill/filldata', [BillsController::class, 'filldata']);
Route::get('BillsBuyingfill/GetID', [BillsController::class, 'getItemID']);
Route::get('BillsBuyingfill/getBillNumber', [BillsController::class, 'getBillNumber']);
Route::get('BillsBuyingGetCurrencyEqual/GetCurrencyEqual', [BillsController::class, 'getCurrencyEqual']);
Route::get('BillsBuyingSettingGet/GetBillSetting',[BillsController::class,'GetBillSetting']);
Route::get('BillsBuyingDOR/AddDeliveryOrReceive',[BillsController::class,'GetBillsDeliveryOrReceive']);
Route::get('BillsSalingfill/filldata', [BillsController::class, 'filldata']);
Route::get('BillsSalingfill/GetID', [BillsController::class, 'getItemID']);
Route::get('BillsSalingfill/getBillNumber', [BillsController::class, 'getBillNumber']);
Route::get('BillsSalingGetCurrencyEqual/GetCurrencyEqual', [BillsController::class, 'getCurrencyEqual']);
Route::get('BillsSalingSettingGet/GetBillSetting',[BillsController::class,'GetBillSetting']);
Route::get('BillsSalingDOR/AddDeliveryOrReceive',[BillsController::class,'GetBillsDeliveryOrReceive']);
Route::get('BillsOrderingfill/filldata', [BillsController::class, 'filldata']);
Route::get('BillsOrderingfill/GetID', [BillsController::class, 'getItemID']);
Route::get('BillsOrderingfill/getBillNumber', [BillsController::class, 'getBillNumber']);
Route::get('BillsOrderingGetCurrencyEqual/GetCurrencyEqual', [BillsController::class, 'getCurrencyEqual']);
Route::get('BillsOrderingSettingGet/GetBillSetting',[BillsController::class,'GetBillSetting']);
Route::get('BillsDeliveryfill/filldata', [BillsController::class, 'filldata']);
Route::get('BillsDeliveryfill/GetID', [BillsController::class, 'getItemID']);
Route::get('BillsDeliveryfill/getBillNumber', [BillsController::class, 'getBillNumber']);
Route::get('BillsDeliveryGetCurrencyEqual/GetCurrencyEqual', [BillsController::class, 'getCurrencyEqual']);
Route::get('BillsDeliverySettingGet/GetBillSetting',[BillsController::class,'GetBillSetting']);
Route::get('BillsReceivefill/filldata', [BillsController::class, 'filldata']);
Route::get('BillsReceivefill/GetID', [BillsController::class, 'getItemID']);
Route::get('BillsReceivefill/getBillNumber', [BillsController::class, 'getBillNumber']);
Route::get('BillsReceiveGetCurrencyEqual/GetCurrencyEqual', [BillsController::class, 'getCurrencyEqual']);
Route::get('BillsReceiveSettingGet/GetBillSetting',[BillsController::class,'GetBillSetting']);
Route::get('GetLastCostPrice/CostPrice',[BillsController::class,'GetLastCostPrice']);
Route::get('GetLastCostPrice/CostPriceByItem',[BillsController::class,'GetLastCostPriceByItem2']);
Route::get('BillPrint/CreatePrint',[BillsController::class,'CreatePrint']);
Route::get('BillPrint/BillPrint',[BillsController::class,'BillPrint']);




Route::get('BillsSalingGet/GetItemInfo',[BillsController::class,'GetItemInfoUsingBarcode']);
Route::get('GetItemInfo/quantityAndprice',[BillsController::class,'GetItemsQuantitiesAnaPrice']);
Route::get('GetSalingGroup/GetRowID',[BillsController::class,'GetRowID']);
#endregion




// Route::get('usersfill/filldata', [UserController::class, 'filldata']);
// Route::get('groupsnamesfill/filldata', [GroupController::class, 'filldata']);
Route::get('salesgroupsfill/filldata', [SalesGroupController::class, 'filldata']);
// Route::get('accountsfill/filldata', [AccountController::class, 'filldata']);
Route::get('accounttreesfill/filldata', [AccountTreeController::class, 'filldata']);
Route::get('account/setCode', [AccountTreeController::class, 'setCode']);
Route::get('itemsfill/filldata', [ItemtwoController::class, 'filldata']);
Route::get('itemCode/setCode', [ItemtwoController::class, 'setMaskCode']);
Route::get('itemsfill/getman', [ItemtwoController::class, 'getmainaccountnumber']);
Route::get('itemsfill/checkcpartnumber', [ItemtwoController::class, 'checkCPartNumber']);
Route::get('itemsfill/checkpartnumber', [ItemtwoController::class, 'checkPartNumber']);
Route::get('itemsfill/checkpartnumber2', [ItemtwoController::class, 'checkPartNumber2']);
Route::get('itemsfill/checkBarcode', [ItemtwoController::class, 'checkBarcode']);
Route::get('itemsfill/gan', [ItemtwoController::class, 'generateaccountnumber']);
Route::post('items/updateItemThree', [ItemtwoController::class, 'updateItemThree']);
Route::get('ordermainfill/filldata',[OrderMainController::class,'filldata']);
Route::get('ordersecondaryfill/filldata',[OrderSecondaryController::class,'filldata']);
Route::get('ordersecondary/index2',[OrderSecondaryController::class,'index2']);
Route::get('itemstoasksfill/filldata',[ItemController::class,'filldata']);
Route::get('getLast/getInfo',[ItemController::class,'addNewRow']);

Route::get('Bondsfill/filldata',[BondsController::class,'filldata']);
Route::get('Bondsfill/getBondNumber',[BondsController::class,'getBondNumber']);
Route::get('BondsPaymentfill/filldata',[BondsController::class,'filldata']);
Route::get('BondsPaymentfill/getBondNumber',[BondsController::class,'getBondNumber']);
Route::get('BondsDocfill/filldata',[BondsController::class,'filldata']);
Route::get('BondsDocfill/getBondNumber',[BondsController::class,'getBondNumber']);
Route::get('BondsStarterfill/filldata',[BondsController::class,'filldata']);
Route::get('BondsStarterfill/getBondNumber',[BondsController::class,'getBondNumber']);
Route::get('BondsBillsfill/filldata',[BondsController::class,'filldata']);
Route::get('BondsBillsfill/getBondNumber',[BondsController::class,'getBondNumber']);

Route::get('bondsSettingfill/filldata',[BondsSettingController::class,'filldata']);



Route::get('BillsSettingfill/filldata',[BillsSettingController::class,'filldata']);


Route::get('StoriesTreesfill/setStCode',[StoriesTreeController::class,'setStCode']);
Route::get('StoriesTreesfill/filldata',[StoriesTreeController::class,'filldata']);
Route::get('Stories/setCode',[StoriesTreeController::class,'setCode']);
Route::get('CustomerSuppliersfill/filldata',[CustomerSupplierController::class,'filldata']);
Route::get('ItemsTreesfill/filldata',[ItemsTreeController::class,'filldata']);
Route::get('ItemsTree/setCode',[ItemsTreeController::class,'setCode']);





Route::get('itemsfill/itemCategory',[ItemtwoController::class,'getITemCategory']);
Route::get('itemsfill/getPartNumber',[ItemtwoController::class,'getPartNumber']);
Route::get('itemFourfill/filldata',[ItemFourController::class,'filldata']);
Route::get('itemFivefill/filldata',[ItemFiveController::class,'filldata']);
Route::get('ItemThreefill/filldata',[ItemThreeController::class,'filldata']);
Route::get('ItemThreefill/getMainStoreName',[ItemThreeController::class,'getMainStoreName']);
Route::get('BillBuyingfill/filldata',[BillBuyingController::class,'filldata']);
Route::get('BillBuyingfill/getBillNumber',[BillBuyingController::class,'getBillNumber']);
Route::get('BillBuyingItemsfill/filldata',[BillBuyingItemsController::class,'filldata']);
Route::get('BillBuyingItemscheck/checkItemIfExist',[BillBuyingItemsController::class,'checkItemIfExist']);
Route::get('BillSalefill/getBillNumber',[BillSaleController::class,'getBillNumber']);
Route::get('BillSalefill/filldata',[BillSaleController::class,'filldata']);
Route::get('BillSaleItemsfill/filldata',[BillSaleItemsController::class,'filldata']);
Route::get('BillSaleItemscheck/checkItemIfExist',[BillSaleItemsController::class,'checkItemIfExist']);

Route::get('usersfill/filldata',[UsersController::class,'filldata']);

Route::get('getpermissions', [PermissionController::class, 'getpermissions']);
Route::get('rpt', [ReportsController::class, 'testalaa'])->name('rpt.test');
Route::get('updatedata', [AccountTreeController::class, 'updatedata']);
Route::get('insertdata', [AccountTreeController::class, 'insertdata']);




