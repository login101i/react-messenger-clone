import React, { forwardRef } from 'react'

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';




import './message.css'


const useStyles = makeStyles({
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: 'red',
        borderWidth: 2,
        borderRadius: 6,



    },

    guest: {
        backgroundColor: 'grey',
        marginBottom: 4,
        marginRight: 'auto',
        borderRadius: 6,


    },
    logged: {
        marginLeft: 'auto',
        backgroundColor: 'purple',
        marginBottom: 12,
        borderRadius: 6,



    },
    title: {
        fontSize: 15,
        display: 'flex',
        flextDirection: 'row',
        // height: 33,

        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        paddingLeft: 5,
        paddingTop: 10,
        paddingBottom: 10,


    },
    text: {
        marginLeft: 11,
        marginRight: 12,
        fontWeight: 600,
        color: 'white',

    }

});
// Usage with Functional Components
// zmieniłem function na const  i dodałem znak =
const Message = forwardRef(({ username, message }, ref) => {

    const isUser = username === message.userName

    const classes = useStyles();
    return (
        <div className={classes.container} ref={ref}>
            <div className={isUser ? classes.logged : classes.guest}>

                <div className={classes.title}  >
                    {!isUser && `${message.userName || "nieznany"} :`}  <div className={classes.text}> {message.message}</div>
                </div>



            </div>
        </div>
    )
}
)

export default Message
