const host="https://reqres.in/";

const list= async (page)=>{
    return new Promise((resolve,reject)=>{
        fetch(`${host}api/users?page${page}`,{
            method:'GET'
        }).then((resp)=>{
            resolve(resp.json());
        }).catch((error)=>{
            reject(error);
        });
    });
}
const create=async(model)=>{
    return new Promise((resolve,reject)=>{
        fetch(`${host}api/users`,{
        method:'POST',
        body:model,
        header:{"contentType":'Application/json'}
    }).then((resp)=>{
        resolve(resp.json());
    }).catch((error)=>{
        reject(error);
    });
    });
}
const update = async (id, model) => {
    return new Promise((resolve, reject) => {
        fetch(`${host}api/users/${id}`, {
            method: 'PUT',
            body: model
        }).then((resp) => {
            resolve(resp.json());
        }).catch((error) => {
            reject(error);
        });
    });
}
const del=async(id)=>{
    return new Promise((resolve,reject)=>{
        fetch(`${host}api/users?/${id}`,{
            method:'DELETE',
        }).then((resp)=>{
            resolve(resp.json());{(
                location.reload
            )}
        }).catch((error)=>{
            reject(error);
        })
    })
}
export default{list,create,update,del};