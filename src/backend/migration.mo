import Time "mo:core/Time";
import Array "mo:core/Array";
import Map "mo:core/Map";
import Principal "mo:core/Principal";

module {
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

  type OldQuizResponse = {
    studentInfo : StudentInfo;
    answers : [QuizAnswer];
  };

  type OldActor = {
    responses : Map.Map<Principal, OldQuizResponse>;
  };

  type NewQuizResponse = {
    studentInfo : StudentInfo;
    answers : [QuizAnswer];
    submittedAt : Int;
  };

  type NewActor = {
    responses : [NewQuizResponse];
  };

  public func run(old : OldActor) : NewActor {
    let newResponses = old.responses.values().toArray().map(
      func(oldResponse) {
        { oldResponse with submittedAt = Time.now() };
      }
    );
    { responses = newResponses };
  };
};
