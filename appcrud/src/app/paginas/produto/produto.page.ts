import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalProdutoPage } from '../modal-produto/modal-produto.page';
import { Produto, ProdutoService } from './produto.service';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.page.html',
  styleUrls: ['./produto.page.scss'],
})

export class ProdutoPage implements OnInit {

  produtos: Produto[];

  constructor( private service: ProdutoService, private modalCtrl: ModalController) { }

  ngOnInit() {
    this.service.getAll().subscribe(resposta => {
      this.produtos = resposta;
    });
  }

  // remover(id: any){
  //   this.service.remove(id).subscribe( () =>{
  //     this.service.getAll().subscribe(resposta => {
  //       this.produtos = resposta;
  //     });
  //   });
  // }

  novoProduto(){
    this.modalCtrl.create({
      component: ModalProdutoPage
    }).then(modal => {
      modal.present();
      return modal.onDidDismiss();
    }).then(({data}) => {
      this.service.getAll().subscribe(resposta => {
        this.produtos = resposta;
      });
    });
  }
}