import { Component, ElementRef, AfterViewInit, ViewChild, OnDestroy, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-monaco-editor',
  standalone: true,
  imports: [],
  templateUrl: './monaco-editor.component.html',
  styleUrls: ['./monaco-editor.component.css']
})
export class MonacoEditorComponent implements AfterViewInit, OnDestroy {
  @ViewChild('editorContainer', { static: false }) editorContainer!: ElementRef;
  private editorInstance: any;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) { }

  async ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      try {
        const monaco = await import('monaco-editor');
        this.initMonaco(monaco);
      } catch (error) {
        console.error('Error loading Monaco Editor:', error);
      }
    }
  }

  private initMonaco(monaco: typeof import('monaco-editor')) {
    if (!this.editorContainer) {
      return;
    }

    this.editorInstance = monaco.editor.create(this.editorContainer.nativeElement, {
      value: [
        'function helloWorld() {',
        '\tconsole.log("Hello, world!");',
        '}'
      ].join('\n'),
      language: 'javascript',
      theme: 'vs-dark',
      automaticLayout: true
    });
  }

  ngOnDestroy() {
    if (this.editorInstance) {
      this.editorInstance.dispose();
    }
  }
}
