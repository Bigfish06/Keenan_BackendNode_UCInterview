const surnames=["Geller","Tribbiani","Buffay","Green","Bing",
    "Wheeler","Hannigan"
]
//we need from [0,l-1]
const min=0
const max=surnames.length-1

const giveNewName=(name)=>{
    name=name.trim()
    if(name.length==0)
    {
        return 'Enter a valid name'
    }

    let newName=name.slice(0,4)
    newName=newName.charAt(0).toUpperCase()+newName.slice(1).toLowerCase()
    const x=Math.floor(Math.random()*(max-min+1)+min)
    return newName+' '+surnames[x]
}

module.exports=giveNewName