import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Library } from "lucide-react"
import AddAlbumDialogue from "./AddAlbumDialogue"
import AlbumTable from "./AlbumTable"


const AlbumTabContent = () => {
  return (
    <Card className='bg-zinc-800/50 border-zinc-700/50'>
      <CardHeader>
      <div className='flex items-center justify-between'>
        <div>
        <CardTitle className='flex items-center gap-2'>
        <Library className='h-5 w-5 text-violet-500' />
Album Library
          </CardTitle>
          <CardDescription>
            Manage your music albums and tracks.
          </CardDescription>
        </div>
        <AddAlbumDialogue />
        </div>
      </CardHeader>
      <CardContent>
        <AlbumTable /> 
      </CardContent>
    </Card>
  )
}

export default AlbumTabContent