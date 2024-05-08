<?php

namespace App\Http\Controllers;

use App\Models\Articles;
use App\Models\Attachments;
use App\Models\Employees;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\File;
use Ramsey\Uuid\Uuid;
use Illuminate\Support\Str;
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
        $Guid = $request->post('Guid');
        if ($Guid == 'null' || $Guid == '' || empty($Guid)) {
            $Guid = strtoupper(Uuid::uuid4()->toString());
        }
        $UserID = session('id');
        if ($request->hasFile('image')) {
            $images = $request->file('image');
            foreach ($images as $image) {

                $imageName =  $image->getClientOriginalName();
                if ($id != "") {
                    $checkImage = Attachments::where([
                        ['ParentGuid', $Guid],
                        ['FilePath', $imageName]
                    ])->count('id');
                    if ($checkImage > 0) {
                    } else {
                        $uploadPath = 'assets/img/administrationImage';
                        $newImageName = Str::random(20) . '.' . $imageName;
                        $image->move($uploadPath, $newImageName);
                        $Attachments = Attachments::updateOrCreate(
                            [
                                'ParentGuid' => $Guid,
                                'DocTitle' => $request->post('DocTitle'),
                                'FilePath' => $newImageName,
                                'UserID' => $UserID,

                            ]

                        );

                    }
                } else {
                    $uploadPath = 'assets/img/administrationImage';
                    $newImageName = Str::random(20) . '.' . $imageName;
                    $image->move($uploadPath, $newImageName);
                    $Attachments = Attachments::updateOrCreate(
                        [
                            'ParentGuid' => $Guid,
                            'DocTitle' => $request->post('DocTitle'),
                            'FilePath' => $newImageName,
                            'UserID' => $UserID,


                        ]

                    );
                }
            }
            $Articles = Articles::updateOrCreate(
                [
                    'id' => $id,
                ],
                [
                    'did' => $request->post('did'),
                    'Guid' => $Guid,
                    'article_title' => $request->post('article_title'),
                    'nof_aut' => $request->post('nof_aut'),
                    'pub_date' => $request->post('pub_date'),
                    'Alink' => $request->post('Alink'),
                    'UserID' => $UserID
    
                ]
            );

        } else {
           
            $Articles = Articles::updateOrCreate(
                [
                    'id' => $id,
                ],
                [
                    'did' => $request->post('did'),
                    'Guid' => $Guid,
                    'article_title' => $request->post('article_title'),
                    'nof_aut' => $request->post('nof_aut'),
                    'pub_date' => $request->post('pub_date'),
                    'Alink' => $request->post('Alink'),
                    'UserID' => $UserID
    
                ]
            );
        }
       
        return response()->json(['status' => 'تم ادخال البيانات بنجاح']);
    }


    public function show(Request $request)
    {
        $id = $request->input('id');
        $Articles = Articles::find($id);
        $Attachments = Attachments::where('ParentGuid', $Articles->Guid)->get();

        $data = [
            'Articles' => $Articles,
            'Attachments' => $Attachments
        ];
        return response()->json($data);
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
        $Articles = Articles::find($id);
        Attachments::where('ParentGuid', $Articles->Guid)->delete();
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

    public function DeleteImages(Request $request)
    {
        $id = $request->input('id');
        $Guid = $request->input('Guid');
        $imageName = $request->input('imageName');

        $deleteImage = Attachments::where([['ParentGuid', $Guid], ['FilePath', $imageName]])->delete();
        if ($deleteImage) {
            $uploadPath = 'assets/img/administrationImage';
            $filePath = $uploadPath . '/' . $imageName;
            if (File::exists($filePath)) {
                File::delete($filePath);
            }
            return response()->json(['status' => 'تم حذف الكتاب بنجاح']);
        }
    }
}
