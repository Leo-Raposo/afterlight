import { Component } from '@angular/core';
import { HighlightCodePipe } from '../../pipe/highlight-code.pipe'; // Adjusted pathimport { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-code-interaction',
  standalone: true,
  imports: [HighlightCodePipe, CommonModule],
  templateUrl: './code-interaction.component.html',
  styleUrls: ['./code-interaction.component.css']
})
export class CodeInteractionComponent {
  submitCode(): void {

  }
  codeSnippet: string = `// Imports
import mongoose, { Schema } from 'mongoose'

// Collection name
export const collection = 'Product'

// Schema
const schema = new Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String
  }
}, { timestamps: true})

// Model
export default mongoose.model(collection, schema, collection)`;

  lineNumbers: number[] = Array.from({ length: 21 }, (_, i) => i + 1);
}
