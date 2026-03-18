import Array "mo:core/Array";
import Set "mo:core/Set";
import Nat "mo:core/Nat";
import Text "mo:core/Text";
import Time "mo:core/Time";
import Migration "migration";

(with migration = Migration.run)
actor {
  type StudentInfo = {
    name : Text;
    age : Nat;
    grade : Text;
    stream : Text;
    email : Text;
    whatsapp : Text;
  };

  type QuizAnswer = {
    categoryName : Text;
    question : Text;
    selectedAnswer : ?Text;
  };

  type QuizResponse = {
    studentInfo : StudentInfo;
    answers : [QuizAnswer];
    submittedAt : Int;
  };

  var responses : [QuizResponse] = [];

  public shared ({ caller }) func submitResponse(studentInfo : StudentInfo, answers : [QuizAnswer]) : async () {
    let newResponse : QuizResponse = {
      studentInfo;
      answers;
      submittedAt = Time.now();
    };
    responses := responses.concat([newResponse]);
  };

  public query ({ caller }) func getAllResponses() : async [QuizResponse] {
    responses;
  };

  public query ({ caller }) func getTotalResponses() : async Nat {
    responses.size();
  };

  public query ({ caller }) func getUniqueStudentCount() : async Nat {
    let emailSet = Set.empty<Text>();

    for (response in responses.values()) {
      emailSet.add(response.studentInfo.email);
    };

    emailSet.size();
  };
};
