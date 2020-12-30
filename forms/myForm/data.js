data = {
    "submitUrl" : "/api/service/custom_form/36cea620-8b75-45d7-a53a-cb1c094e1b34/bdcd87b0-07ad-41dd-8c8d-b25942621e27/continue",
    "definitions" : {
        "colors" : {
            "label" : "colors",
            "type" : "string",
            "cardinality" : "AT_LEAST_ONE"
        },
          "firstName" : {
            "type" : "string",
            "cardinality" : "ONE_AND_ONLY_ONE"
        },
        "lastName" : {
            "type" : "string",
            "cardinality" : "ONE_AND_ONLY_ONE"
        },
        "age" : {
            "type" : "int",
            "cardinality" : "ONE_AND_ONLY_ONE"
        }
    },
    "values" : {
        "colors" : [ "red", "green", "blue" ],
        "lastName" : "Smith",
        "age": 21,
    }
};
