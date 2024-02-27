<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class ContactController extends Controller
{
    public function sendMail(Request $request)
    {
        $details = [
            'name' => $request->name,
            'email' => $request->email,
            'subject' => $request->subject,
            'message' => $request->message
        ];

        Mail::to('egcp07@gmail.com')->send(new \App\Mail\ContactMail($details));

        if (Mail::failures()) {
            return response()->json([
                'message' => 'Erro ao enviar o email, tente novamente mais tarde!'
            ], 500);
        }

        return response()->json([
            'message' => 'Email enviado com sucesso!'
        ]);
    }
}
