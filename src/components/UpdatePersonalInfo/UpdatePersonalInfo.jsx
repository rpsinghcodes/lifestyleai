export default function UpdatePersonalInfo({name, email, open}){

    return(
        <dialog open={open} className="rounded-md p-8">
            <div className="flex gap-2 p-2 ">
                <span></span>
                <span>Personal Info</span>
                <button>Cancel</button>
            </div>
            <div>
                <span>Update UserName</span>
                <input type="text" name="username" defaultValue={name} />
            </div>
            <div>
                <span>Update Email</span>
                <input type="email" name="email" defaultValue={email} />
            </div>
            <div className="flex flex-col">
                <span>Update Password</span>
                <input type="password" name="oldPassword" placeholder="Write old password"  />
                <input type="password" name="newPassword" placeholder="Write new password" />                
            </div>
            <button>Update</button>
        </dialog>
    )
}