const conn = require('../configs/db')

module.exports={
    getJob: function(){
        return new Promise(function(resolve,reject){
            conn.query('SELECT * FROM view_data',function(err,result){
                if (!err) {
                    resolve(result)
                  } else {
                    reject(new Error(err))
                  }
            })
        })
    },
    addJob: function(data){
        return new Promise(function(resolve,reject){
            conn.query('INSERT INTO tb_job SET ?',data,function(err,result){
                if (!err) {
                    resolve(result)
                  } else {
                    reject(new Error(err))
                  }
            })
        })
    },
    updateJob: function(data,jobID){
        return new Promise(function(resolve,reject){
            conn.query('UPDATE tb_job SET ? WHERE id = ?',[data,jobID],function(err,result){
                if (!err) {
                    resolve(result)
                  } else {
                    reject(new Error(err))
                  }
            })
        })
    },
    deleteJob: function(jobID){
        return new Promise(function(resolve,reject){
            conn.query('DELETE FROM tb_job WHERE id = ?',[jobID],function(err,result){
                if (!err) {
                    resolve(result)
                  } else {
                    reject(new Error(err))
                  }
            })
        })
    },
    searchJobbyName: function(jobName){
        return new Promise(function(resolve,reject){
            conn.query(`SELECT * FROM view_data WHERE name LIKE '%${jobName}'%`,function(err,result){
                if (!err) {
                    resolve(result)
                  } else {
                    reject(new Error(err))
                  }
            })
        })
    }
}