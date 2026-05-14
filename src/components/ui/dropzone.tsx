import { type DragEvent, useState, useRef } from "react"
import { cn } from "@/lib/utils"
import { Upload } from "lucide-react"

interface DropzoneProps {
  className?: string
  accept?: Record<string, string[]>
  onDrop?: (files: File[]) => void
}

function Dropzone({ className, accept, onDrop }: DropzoneProps) {
  const [isDragActive, setIsDragActive] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)
  const dragCounter = useRef(0)

  function handleDragEnter(e: DragEvent) {
    e.preventDefault()
    e.stopPropagation()
    dragCounter.current++
    if (e.dataTransfer?.types?.length && !isDragActive) {
      setIsDragActive(true)
    }
  }

  function handleDragLeave(e: DragEvent) {
    e.preventDefault()
    e.stopPropagation()
    dragCounter.current--
    if (dragCounter.current === 0) {
      setIsDragActive(false)
    }
  }

  function handleDragOver(e: DragEvent) {
    e.preventDefault()
    e.stopPropagation()
  }

  function handleDrop(e: DragEvent) {
    e.preventDefault()
    e.stopPropagation()
    setIsDragActive(false)
    dragCounter.current = 0

    if (e.dataTransfer?.files?.length) {
      onDrop?.(Array.from(e.dataTransfer.files))
    }
  }

  function handleClick() {
    inputRef.current?.click()
  }

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    if (e.target.files?.length) {
      onDrop?.(Array.from(e.target.files))
      e.target.value = ""
    }
  }

  const acceptString = accept
    ? Object.keys(accept).join(",")
    : undefined

  return (
    <div
      data-slot="dropzone"
      onClick={handleClick}
      onDragEnter={handleDragEnter}
      onDragLeave={handleDragLeave}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
      className={cn(
        "flex cursor-pointer flex-col items-center justify-center gap-2 rounded-lg border-2 border-dashed border-muted-foreground/25 px-6 py-10 text-center text-sm transition-colors hover:border-muted-foreground/50",
        isDragActive && "border-primary bg-primary/5",
        className,
      )}
    >
      <input
        ref={inputRef}
        type="file"
        hidden
        accept={acceptString}
        onChange={handleInputChange}
      />
      <Upload className="size-8 text-muted-foreground" />
      {isDragActive ? (
        <p className="text-foreground">Suelta el archivo aquí...</p>
      ) : (
        <>
          <p className="text-foreground">
            <span className="font-medium text-primary">Haz clic</span>{" "}
            o arrastra un archivo
          </p>
          <p className="text-muted-foreground">M3U, XSPF, o M3U8</p>
        </>
      )}
    </div>
  )
}

export { Dropzone }
