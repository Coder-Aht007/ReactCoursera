import * as ActionTypes from "./ActionTypes"
import {baseUrl} from "../shared/baseUrl"

export const addComment=(comment)=>({
    type:ActionTypes.ADD_COMMENT,
    payload:comment
});


export const postFeedback=(feedback)=>(dispatch)=>{
    const toUpload={...feedback}
    toUpload.date=new Date().toISOString();
    return fetch(baseUrl+"feedback",{
        method:"POST",
        body:JSON.stringify(toUpload),
        headers:{
            "Content-Type":"application/json"
        },
        credentials:"same-origin"
    })
    .then(
        response=>{
            if(response.ok)
            {
                return response;
            }
            else{
                 var error=new Error("Error"+response.status+":"+response.statusText);
                error.response=response;
                throw error;
            }
        },
        error=>{
            var errmess=new Error(error.message);
            throw errmess;
        }
    )
    .then(response=>{
        return response.text();
    })
    .then (response=>{

        alert("THANKS FOR YOUR FEEDBACK!\n "+response);
    })
    .catch(error=>{console.log("POST FEEDBACK",error.message)})
}

export const postComment=(dishId,rating,author,comment)=>(dispatch)=>{

    const newComment={
        dishId:dishId,
        rating:rating,
        author:author,
        comment:comment
    }
    newComment.date=new Date().toISOString();
    return fetch(baseUrl+"comments",{
        method:"POST",
        body:JSON.stringify(newComment),
        headers:{
            "Content-Type":"application/json"
        },
        credentials:"same-origin"
    })
    .then(
        response=>{
            if(response.ok)
            {
                return response;
            }
            else{
                 var error=new Error("Error"+response.status+":"+response.statusText);
                error.response=response;
                throw error;
            }
        },
        error=>{
            var errmess=new Error(error.message);
            throw errmess;
        }
    )
    .then(response=>response.json())
    .then (response=>dispatch(addComment(response)))
    .catch(error=>{console.log("POST COMMENS",error.message)});
}

export const fetchLeaders=()=>(dispatch)=>
{
    dispatch(LeadersLoading(true));

    return fetch(baseUrl+"leaders")
    .then(
        response=>{
            if(response.ok)
            {
                return response;
            }
            else{
                var error=new Error("Error"+response.status+":"+response.statusText);
                error.response=response;
                throw error;
            }
        },
        error=>{
            var errmess=new Error(error.message);
            throw errmess;
        }
    )
    .then(response=>response.json())
    .then (leaders=>dispatch(addLeaders(leaders)))
    .catch(error=>dispatch(dishesFailed(error.message)));
}

export const LeadersLoading=()=>({
    type:ActionTypes.LEADERS_LOADING
});

export const addLeaders=(leaders)=>({
    type:ActionTypes.ADD_LEADERS,
    payload:leaders
});
export const fetchDishes =()=>(dispatch)=>{
    dispatch(dishesLoading(true));

    return fetch(baseUrl+"dishes")
    .then(
        response=>{
            if(response.ok)
            {
                return response;
            }
            else{
                var error=new Error("Error"+response.status+":"+response.statusText);
                error.response=response;
                throw error;
            }
        },
        error=>{
            var errmess=new Error(error.message);
            throw errmess;
        }
    )
    .then(response=>response.json())
    .then (dishes=>dispatch(addDishes(dishes)))
    .catch(error=>dispatch(dishesFailed(error.message)));
}

export const dishesLoading=()=>({
    type:ActionTypes.DISHES_LOADING
});

export const dishesFailed=(errmess)=>({
    type:ActionTypes.DISHES_FAILED,
    payload:errmess
});

export const addDishes =(dishes)=>({
    type:ActionTypes.ADD_DiSHES,
    payload:dishes
})

export const fetchComments =()=>(dispatch)=>{
    return fetch(baseUrl+"comments")
    .then(
        response=>{
            if(response.ok)
            {
                return response;
            }
            else{
                var error=new Error("Error"+response.status+":"+response.statusText);
                error.response=response;
                throw error;
            }
        },
        error=>{
            var errmess=new Error(error.message);
            throw errmess;
        }
    )
    .then(response=>response.json())
    .then (comments=>dispatch(addComments(comments)))
    .catch(error=>dispatch(commentsFailed(error.message)));
}

export const commentsFailed=(errmess)=>({
    type:ActionTypes.COMMENTS_FAILED,
    payload:errmess
});

export const addComments =(comments)=>({
    type:ActionTypes.ADD_COMMENTS,
    payload:comments
})

export const addFeedback=(feedback)=>({
    type:ActionTypes.ADD_FEEDBACK,
    payload:feedback

})

export const fetchPromos =()=>(dispatch)=>{
    dispatch(promosLoading(true));

    return fetch(baseUrl+"promotions")
    .then(
        response=>{
            if(response.ok)
            {
                return response;
            }
            else{
                var error=new Error("Error"+response.status+":"+response.statusText);
                error.response=response;
                throw error;
            }
        },
        error=>{
            var errmess=new Error(error.message);
            throw errmess;
        }
    )

    .then(response=>response.json())
    .then (promos=>dispatch(addDishes(promos)))
    .catch(error=>dispatch(promosFailed(error)));

}

export const promosLoading=()=>({
    type:ActionTypes.PROMOS_FAILED
});

export const promosFailed=(errmess)=>({
    type:ActionTypes.PROMOS_FAILED,
    payload:errmess
});

export const addPromos =(dishes)=>({
    type:ActionTypes.ADD_PROMOS,
    payload:dishes
})

