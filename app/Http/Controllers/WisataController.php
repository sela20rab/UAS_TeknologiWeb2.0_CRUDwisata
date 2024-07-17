<?php
namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Wisata;
use Image;
use Storage;
use Validator;

class WisataController extends Controller
{
    public function index()
    {
        $wisatas = Wisata::all();
        if($wisatas->count()>0){

            return response()->json([
                'status'=> 200,
                'wisatas'=>$wisatas
            ],200);
        }else{
            return response()->json([
                'status'=> 404,
                'message'=>'No record found'
            ],400);

        }
    }

    
    public function store(Request $request)
    {
        $validator= Validator::make($request->all(),[
            'name' => 'required|string|max:255',
            'location' => 'required|string|max:255',
            'ticket' => 'required|string|max:255',
            'rating' => 'required|string|max:255',
            'image_path' => 'required|url|max:2055',
        ]);
        
        
        
        if($validator->fails()){
            return response()->json([
                'status' => 422,
                'errors'=> $validator->messages()
            ],422);
        }else{
            $wisata = Wisata::create([
                'name' => $request->name,
                'location' => $request->location,
                'ticket' => $request->ticket,
                'rating' => $request->rating,
                'image_path' => $request->image_path,
                
            ]);
            if($wisata){
                return response()->json([
                    'status'=>200,
                    'message' => "Wisata Added Created Successfully"
                ],200);
            }else{
                return response()->json([
                    'status'=>500,
                    'message' => "Something Went Wrong!"
                ],500);
                
            }
        }
    }
    public function show($id)
    {
        $wisata = Wisata::find($id);
        if($wisata){
                return response()->json([
                    'status'=>200,
                    'message' => $wisata
                ],200);
            }else{
                return response()->json([
                    'status'=>404,
                    'message' => "No Such Wisata Found!"
                ],404);
                
        }
    }

    public function edit( $id)
    {
        $wisata = Wisata::find($id);
        if($wisata){
                return response()->json([
                    'status'=>200,
                    'message' => $wisata
                ],200);
            }else{
                return response()->json([
                    'status'=>404,
                    'message' => "No Such Wisata Found!"
                ],404);
                
        }
        }

    public function update(Request $request, int $id)
    {
        $validator= Validator:: make($request->all(),[
            'name' => 'required|string|max:255',
            'location' => 'required|string|max:255',
            'ticket' => 'required|string|max:255',
            'rating' => 'required|string|max:255',
            'image_path' => 'required|url|max:2055'
        ]);
        
        
        if($validator->fails()){
            return response()->json([
                'status' =>422,
                'errors'=> $validator->messages()
            ],422);
        }else{
            $wisata = Wisata::find($id);
            $wisata ->update([
                'name' => $request->name,
                'location' => $request->location,
                'ticket' => $request->ticket,
                'rating' => $request->rating,
                'image_path' => $request->image_path,
                
            ]);
            if($wisata){
                return response()->json([
                    'status'=>200,
                    'message' => "Wisata updated Successfully"
                ],200);
            }else{
                return response()->json([
                    'status'=>404,
                    'message' => "No Such Wisata Found!"
                ],404);
                
            }
        }
    } 
    

    public function destroy($id)
    {
        $wisata = Wisata::find($id);

        // Delete image file
        if ($wisata) {
            $wisata->delete();
            return response()->json([
                'status'=>200,
                'message' => "Wisata Deleted Successfully"
            ],200);
        }else{
                return response()->json([
                    'status'=>404,
                    'message' => "No Such Wisata Found!"
                ],404);
                
            }
        }

        
    }

