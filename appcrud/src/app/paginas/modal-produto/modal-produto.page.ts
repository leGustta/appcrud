import { NgForOf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { ClienteService } from 'src/app/servicos/cliente.service';

@Component({
  selector: 'app-modal-produto',
  templateUrl: './modal-produto.page.html',
  styleUrls: ['./modal-produto.page.scss'],
})
export class ModalProdutoPage implements OnInit {

  constructor(private modalCtrl: ModalController, private service: ClienteService) { }

  ngOnInit() {
  }

  fecharModal(){
    this.modalCtrl.dismiss();
  }

  enviarFormulario(form:NgForm){
    const produto = form.value;
    this.service.create(produto).subscribe(resposta =>{
      this.modalCtrl.dismiss();
    });
  }

}