import { Slide } from "react-awesome-reveal";
import { useParams } from "react-router-dom";
import { findChallengeSetById } from "../../Data/Query/challengeQuery";
import { Link } from "react-router-dom";
function SubChallengeSet() {
  const { id } = useParams();
  const challengeSet = findChallengeSetById(id);

  return (
    <div>
      <section className="py-5 sm:py-10 bg-gray-100 sm:px-8 px-2">
        <div className="mx-auto w-3/4 sm:w-1/4 xl:w-1/6">
          <img
            src={challengeSet.img}
            alt={challengeSet.name}
            className="w-full"
          />
        </div>
        <h2>{challengeSet.name}</h2>
        {challengeSet.challenges && challengeSet.challenges.length > 0 ? (
          challengeSet.challenges.map((challenge, index) => (
            <Slide
              direction={index % 2 === 0 ? "left" : "right"}
              triggerOnce
              key={index}
            >
              <div className="mb-10 border-solid border-gray-500 border-4 shadow-md p-3 rounded-2xl">
                <Link
                  to={{
                    pathname: `/challenge-sets/${challengeSet.id}/${challenge.categoryName}`,
                    state: { challengeSet: challengeSet.challenges },
                  }}
                >
                  <h3 className="text-xl font-bold text-red-700">
                    {challenge.categoryTitle}
                  </h3>
                </Link>
                <p>{challenge.categoryDescription}</p>
              </div>
            </Slide>
          ))
        ) : (
          <p>No challenges available.</p>
        )}
      </section>
    </div>
  );
}

export default SubChallengeSet;