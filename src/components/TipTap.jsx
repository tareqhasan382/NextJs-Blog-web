'use client'

import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import Toolbar from './Toolbar'
import Underline from '@tiptap/extension-underline'
const Tiptap = ({ content,onChange}) => {

  const handleChange=(newContent)=>{
    onChange(newContent)
  }
  const editor = useEditor({
    content:`<p>Write a story...</p>`, 
    extensions: [StarterKit,Underline],
    editorProps:{
      attributes:{
        class:" flex flex-col px-4 py-3 justify-start border-b border-r border-l border-gray-700 text-black items-start w-full gap-3 font-medium text-[16px] pt-4 rounded-md outline-none "
      },

    },
    onUpdate:({editor})=>{
      handleChange(editor.getHTML());
    }

  })

  return (
   <div className=' w-full px-4 '>
    <Toolbar editor={editor} content={content}  />
    <EditorContent editor={editor} content={content} />

   </div>
  )
}

export default Tiptap

//{ content,onChange}  

// class:" flex flex-col px-4 py-3 justify-start border-b border-r border-l border-gray-700 text-gray-400 items-start w-full gap-3 font-medium text-[16px] pt-4 rounded-br-md outline-none "