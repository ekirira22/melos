"use client"

import usePlayer from "@/hooks/usePlayer"
import useGetSongById from "@/hooks/useGetSongById";
import useLoadSongUrl from "@/hooks/useLoadSongUrl";

const Player = () => {

  const player = usePlayer();
  const { song } = useGetSongById(player.activeId)
  
  const songUrl = useLoadSongUrl(song!);

  if(!song || !songUrl || !player.activeId) {
    return null
  }

  return (
    <div className="
      
    ">

    </div>
  )
}

export default Player