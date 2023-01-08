import React, { useEffect, useState } from 'react'
import './board.css'

export default function Board() {

    const [board, setBoard] = useState(
      [
        [
          [{value:1, available : true},{value:null},{value:3, available : true},{value:null},{value:null},{value:6, available : true},{value:null},{value:null},{value:9,available : true},{value:null},
          {value:11,available : false},{value:null},{value:13,available : false},{value:null},{value:15,available : true},{value:null},{value:null},{value:18,available : true},{value:null},{value:20,available : true}],
          [{value:1, available : true},{value:null},{value:3,available : false},{value:null},{value:5, available : true},{value:null},{value:null},{value:null},{value:null},{value:null},
          {value:11, available : true},{value:null},{value:null},{value:null},{value:null},{value:16, available : true},{value:null},{value:18,available : false},{value:null},{value:20, available : true}],
          [{value:1, available : true},{value:null},{value:3, available : true},{value:null},{value:null},{value:6, available : true},{value:null},{value:null},{value:9, available : true},{value:null},
          {value:11,available : false},{value:null},{value:13,available : false},{value:null},{value:15, available : true},{value:null},{value:null},{value:18, available : true},{value:null},{value:20, available : true}],
        ],
      ]
      )
      const [lastTileSelected, setLastTileSelected] = useState(null)
      useEffect(()=>{
      },[])

      const deleteTilesPair =(iFloor, iRow, iTile, iFloor1, iRow1, iTile1)=>{
        console.log("ye")
        board[iFloor][iRow][iTile].value = null
        board[iFloor1][iRow1][iTile1].value = null
        setLastTileSelected(null)
      }

      const checkTile =(iFloor, iRow, iTile)=>{
        lastTileSelected == null? setLastTileSelected ([iFloor, iRow, iTile]) : 
        board[lastTileSelected[0]][lastTileSelected[1]][lastTileSelected[2]].value == board[iFloor][iRow][iTile].value?
        deleteTilesPair(lastTileSelected[0], lastTileSelected[1], lastTileSelected[2], iFloor, iRow, iTile) : 
        setLastTileSelected ([iFloor, iRow, iTile])
      }

  return (
    <div id='board'>
      {
        board && board.map( (floors,i) =>{
          let floorGap = (i+1)*20
          return(
            <div className='floor' style={{left:floorGap+'px', top:floorGap+'px'}}>
              {
                floors && floors.map((floor,i1)=>{
                  return(
                    <div className='row' style={{top:i1*8+'vw'}}>
                      {
                        floor && floor.map((row, i2) =>{
                          return(
                            row.value!=null?
                            row.available==true?
                            <span className='tuile' style={{left:i2*3+'vw'}} onClick={()=>checkTile(i,i1,i2)}>{row.value}</span>:
                            <span className='tuile' style={{left:i2*3+'vw', border:'solid red 1px'}}>{row.value}</span>
                            :null
                          )
                        })
                      }
                    </div>
                  )
                })
              }
            </div>
          )
        })
      }
    </div>
  )
}
