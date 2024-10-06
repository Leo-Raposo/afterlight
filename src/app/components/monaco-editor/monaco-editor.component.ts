import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import * as monaco from 'monaco-editor';

@Component({
  selector: 'app-monaco-editor',
  standalone: true,
  imports: [],
  templateUrl: './monaco-editor.component.html',
  styleUrl: './monaco-editor.component.css'
})
export class MonacoEditorComponent implements OnInit {
  @ViewChild('editorContainer', { static: true }) editorContainer!: ElementRef;

  ngOnInit() {
    this.initMonaco();
  }

  private initMonaco() {
    monaco.editor.create(this.editorContainer.nativeElement, {
      value: [
        'function helloWorld() {',
        '\tconsole.log("Hello, world!");',
        '}'
      ].join('\n'),
      language: 'javascript',
      theme: 'vs-dark'
    });
  }
}
