import React from 'react'
import { Appearance, StyleSheet, Text, View } from 'react-native'
import Title from './title';
import commentReply from "./finalexample.js";
import Darkthememgr from './darkthememgr';
import { Image } from 'react-native-elements/dist/image/Image';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faReply, } from '@fortawesome/free-solid-svg-icons'

let imager =<Darkthememgr icon = 'up'/>
  function Comment({ commentPara }) {
    const nestedComments = (commentPara.children || []).map(mapper => {
      return <Comment key={mapper.id} commentPara={mapper} />
    })
    
    return (
      <View style={{marginLeft: 15,borderLeftWidth:1.5,paddingTop:5,paddingLeft:4,borderColor:'grey'}}>
        <View style={{}}>
        <View >
                <Title
                        name={commentPara.name}
                        avatarSize={30}
                        titleStyle= {styles.main}
                        time = {commentPara.time}
                    />
        </View>
        <View >        
            <Text style={{paddingLeft:3}} >{commentPara.text}</Text>
        </View>
        <View >
                <View style={{flexDirection:'row'}}>
                    <Text style={{flex:1.8}}/>
                    <View style={{flex:1,flexDirection:'row'}}>
                        <FontAwesomeIcon icon = {faReply} color='#33BEF0' size={18}/>
                                            <Text>    Reply</Text>
                    </View>
                    <View style={{flex:1,justifyContent:'space-between',flexDirection:'row'}}>
                        <View style={{flex:1,height:20}}><Darkthememgr icon='up'/></View>
                        <Text style={{textAlign:'center'}}>{commentPara.likes}</Text>
                        <View style={{flex:1,height:20,alignItems:'flex-end'}}><Darkthememgr icon='down'/></View>
                    </View>
                </View>
        </View>
        </View>
            {nestedComments}
        </View>
      
    ) 
  }
const HeadComment = () => {
    return (
        <View>
            <View style={{flexDirection:'column'}}>
                {
                    commentReply.map((comment: { id: React.Key | null | undefined; }) => {
                    return (
                        <Comment key={comment.id} commentPara={comment} />
                    )
                    })
                }
            </View>
        </View>
    )
}

export default HeadComment

const styles = StyleSheet.create({
    main:{
        alignSelf:'center',
    },
    head:{
        
    },
    content:{

    },
    foot:{

    }
})
{/*
    root = array.fliter( heirachy==0);
    repliedCommnet= array.filter()
*/}