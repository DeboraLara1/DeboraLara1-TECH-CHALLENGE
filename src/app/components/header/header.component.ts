import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // Lidar com o clique no menu hambúrguer
    const hamburgerMenu = document.getElementById('hamburgerMenu') as HTMLElement;
    const sideMenu = document.getElementById('sideMenu') as HTMLElement;
    const closeMenu = document.getElementById('closeMenu') as HTMLElement;

    // Adicionar evento de clique ao menu hambúrguer
    hamburgerMenu.addEventListener('click', () => {
      hamburgerMenu.classList.toggle('active');  // Alterna a classe 'active' para mudar o ícone do hambúrguer para 'X'
      sideMenu.classList.toggle('show');  // Alterna a visibilidade do menu lateral
    });

    // Adicionar evento de clique ao botão de fechar
    closeMenu.addEventListener('click', () => {
      sideMenu.classList.remove('show');  // Remove a classe 'show' para ocultar o menu
      hamburgerMenu.classList.remove('active');  // Restaura o ícone do hambúrguer
    });
  }
}
