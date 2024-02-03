import { Component, OnInit } from '@angular/core';
import { MessageService, SelectItem } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-tabla',
  standalone: true,
  imports: [ToastModule,ButtonModule],
  providers:[MessageService,],
  templateUrl: './tabla.component.html',
  styleUrl: './tabla.component.scss'
})
export class TablaComponent {

  constructor(private messageService: MessageService) {}

  show() {
      this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Message Content' });
  }}