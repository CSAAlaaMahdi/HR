<?php

namespace App\Http\Controllers;

use App\Models\Articles;
use App\Models\Employees;
use Illuminate\Http\Request;


class ArticlesController extends Controller
{

    public function index()
    {
        if (session()->has('User')) {
            return view('administration.articles');
        }
    }


    public function create(Request $request)
    {
        $getData = Articles::orderByDesc('id')->get()->map(function($item){
            $item['did'] = Employees::find($item['did']) != null ? Employees::find($item['did'])->fullname : "" ;
            return $item;
        });

        $data = [
            'getArticles' => $getData,
        ];
        return response()->json($data);
    }


    public function store(Request $request)
    {
        $id = $request->post('id');
        $Articles = Articles::updateOrCreate(
            [
                'id' => $id,
            ],
            [
                'did' => $request->post('did'),
                'article_title' => $request->post('article_title'),
                'nof_aut' => $request->post('nof_aut'),
                'pub_date' => $request->post('pub_date'),
                'Alink' => $request->post('Alink'),

            ]
        );
        return response()->json(['status' => 'تم ادخال البيانات بنجاح']);
    }


    public function show(Request $request)
    {
        $id = $request->input('id');
        $Articles = Articles::find($id);

        return response()->json($Articles);
    }


    public function edit($id)
    {
        //
    }


    public function update(Request $request)
    {
    }


    public function destroy(Request $request)
    {
        $id = $request->post('id');
        Articles::find($id)->delete();
        return response()->json(['status' => 'تم حذف البيانات بنجاح']);
    }

    public function filldata()
    {
        $getEmp = Employees::select('eid', 'fullname')
            ->orderBy('fullname')
            ->get();

        $data = [
            'getEmp' => $getEmp,


        ];
        return response()->json($data);
    }
}
