function card(employee) {
    var newInfo = ""
    if(employee.getRole()==="Manager"){
        newInfo="Office Number:" + employee.officeNumber
    }
    else if (employee.getRole()==="Engineer"){
        newInfo="Github:" + employee.github
    }
    else {
        newInfo="School:" + employee.school
    }
    return`
    <div class="col">
                <div class="card" style="width: 18rem;">
                    <div class="card-body">
                      <h5 class="card-title">${employee.name}</h5>
                      <p class="card-text">${employee.getRole()}</p>
                    </div>
                    <ul class="list-group list-group-flush">
                      <li class="list-group-item">Email:${employee.email}</li>
                      <li class="list-group-item">ID:${employee.id}</li>
                      <li class="list-group-item">${newInfo}</li>
                    </ul>
                  </div>
            </div>
    `
}

module.exports=card