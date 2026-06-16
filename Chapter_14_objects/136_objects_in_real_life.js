const env={
base_url :  "https://staging.myapp.com",
retries : 50000,
browser : "chrome"
}

const expected_response={
    status: 200,
    body : {
        user:{
            role:"admin",
            active:"true"

        }
    }
}