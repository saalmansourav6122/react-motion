import React from "react";
import { motion, useScroll } from "motion/react";
import { div } from "motion/react-client";

function One() {
  const scrollyProgress = useScroll().scrollYProgress;
  console.log(scrollyProgress);

  return (
    <div className="container">
      <motion.div
        style={{ scaleX: scrollyProgress }}
        className="header_line"
      ></motion.div>

      <h1 className="header">Lorem ipsum dolor sit amet.</h1>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut fugit
        ducimus labore fugiat, deserunt nobis ex eius laborum commodi molestias
        architecto sapiente sint aliquam saepe error, corrupti, ipsum
        repudiandae animi adipisci id dolores cupiditate illum quos voluptas? Ex
        deserunt sed praesentium et dolorem voluptatibus aliquid illo modi,
        porro minus impedit qui illum eligendi. Nam aut ut perspiciatis tempore
        sunt officiis laboriosam impedit voluptas libero non laudantium,
        doloribus, corporis quidem incidunt eius animi aperiam, quod similique.
        Modi animi eos itaque nobis ducimus eius quisquam excepturi, accusamus,
        doloribus dolore quibusdam nam dolor tenetur repellendus aliquam ipsa
        fugiat dolores possimus, aliquid ut neque repudiandae deleniti!
        Perspiciatis repellendus suscipit iusto facilis tempore laborum culpa
        cumque, voluptates dolore saepe esse necessitatibus atque nisi
        explicabo. Nulla odit, fugiat tempore voluptatem quae deserunt cum nisi.
        Aliquid similique odit mollitia, aperiam, eaque minus quisquam cumque
        deleniti non dolorem doloremque alias eum itaque optio magnam delectus,
        fuga cupiditate quaerat ducimus quo porro laudantium quae dicta. Qui,
        ea? Ratione magnam quis soluta et quibusdam dolor, at molestias
        repellendus eligendi delectus explicabo quod laboriosam aliquid
        voluptates deleniti, assumenda nemo incidunt? Voluptatum quae deleniti
        ipsum nisi illo pariatur, reprehenderit repellendus sunt eum quisquam
        adipisci esse a obcaecati asperiores sapiente et sed ea.
      </p>
      <br />
      <br />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut fugit
        ducimus labore fugiat, deserunt nobis ex eius laborum commodi molestias
        architecto sapiente sint aliquam saepe error, corrupti, ipsum
        repudiandae animi adipisci id dolores cupiditate illum quos voluptas? Ex
        deserunt sed praesentium et dolorem voluptatibus aliquid illo modi,
        porro minus impedit qui illum eligendi. Nam aut ut perspiciatis tempore
        sunt officiis laboriosam impedit voluptas libero non laudantium,
        doloribus, corporis quidem incidunt eius animi aperiam, quod similique.
        Modi animi eos itaque nobis ducimus eius quisquam excepturi, accusamus,
        doloribus dolore quibusdam nam dolor tenetur repellendus aliquam ipsa
        fugiat dolores possimus, aliquid ut neque repudiandae deleniti!
        Perspiciatis repellendus suscipit iusto facilis tempore laborum culpa
        cumque, voluptates dolore saepe esse necessitatibus atque nisi
        explicabo. Nulla odit, fugiat tempore voluptatem quae deserunt cum nisi.
        Aliquid similique odit mollitia, aperiam, eaque minus quisquam cumque
        deleniti non dolorem doloremque alias eum itaque optio magnam delectus,
        fuga cupiditate quaerat ducimus quo porro laudantium quae dicta. Qui,
        ea? Ratione magnam quis soluta et quibusdam dolor, at molestias
        repellendus eligendi delectus explicabo quod laboriosam aliquid
        voluptates deleniti, assumenda nemo incidunt? Voluptatum quae deleniti
        ipsum nisi illo pariatur, reprehenderit repellendus sunt eum quisquam
        adipisci esse a obcaecati asperiores sapiente et sed ea.
      </p>
      <br />
      <br />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut fugit
        ducimus labore fugiat, deserunt nobis ex eius laborum commodi molestias
        architecto sapiente sint aliquam saepe error, corrupti, ipsum
        repudiandae animi adipisci id dolores cupiditate illum quos voluptas? Ex
        deserunt sed praesentium et dolorem voluptatibus aliquid illo modi,
        porro minus impedit qui illum eligendi. Nam aut ut perspiciatis tempore
        sunt officiis laboriosam impedit voluptas libero non laudantium,
        doloribus, corporis quidem incidunt eius animi aperiam, quod similique.
        Modi animi eos itaque nobis ducimus eius quisquam excepturi, accusamus,
        doloribus dolore quibusdam nam dolor tenetur repellendus aliquam ipsa
        fugiat dolores possimus, aliquid ut neque repudiandae deleniti!
        Perspiciatis repellendus suscipit iusto facilis tempore laborum culpa
        cumque, voluptates dolore saepe esse necessitatibus atque nisi
        explicabo. Nulla odit, fugiat tempore voluptatem quae deserunt cum nisi.
        Aliquid similique odit mollitia, aperiam, eaque minus quisquam cumque
        deleniti non dolorem doloremque alias eum itaque optio magnam delectus,
        fuga cupiditate quaerat ducimus quo porro laudantium quae dicta. Qui,
        ea? Ratione magnam quis soluta et quibusdam dolor, at molestias
        repellendus eligendi delectus explicabo quod laboriosam aliquid
        voluptates deleniti, assumenda nemo incidunt? Voluptatum quae deleniti
        ipsum nisi illo pariatur, reprehenderit repellendus sunt eum quisquam
        adipisci esse a obcaecati asperiores sapiente et sed ea.
      </p>
      <br />
      <br />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut fugit
        ducimus labore fugiat, deserunt nobis ex eius laborum commodi molestias
        architecto sapiente sint aliquam saepe error, corrupti, ipsum
        repudiandae animi adipisci id dolores cupiditate illum quos voluptas? Ex
        deserunt sed praesentium et dolorem voluptatibus aliquid illo modi,
        porro minus impedit qui illum eligendi. Nam aut ut perspiciatis tempore
        sunt officiis laboriosam impedit voluptas libero non laudantium,
        doloribus, corporis quidem incidunt eius animi aperiam, quod similique.
        Modi animi eos itaque nobis ducimus eius quisquam excepturi, accusamus,
        doloribus dolore quibusdam nam dolor tenetur repellendus aliquam ipsa
        fugiat dolores possimus, aliquid ut neque repudiandae deleniti!
        Perspiciatis repellendus suscipit iusto facilis tempore laborum culpa
        cumque, voluptates dolore saepe esse necessitatibus atque nisi
        explicabo. Nulla odit, fugiat tempore voluptatem quae deserunt cum nisi.
        Aliquid similique odit mollitia, aperiam, eaque minus quisquam cumque
        deleniti non dolorem doloremque alias eum itaque optio magnam delectus,
        fuga cupiditate quaerat ducimus quo porro laudantium quae dicta. Qui,
        ea? Ratione magnam quis soluta et quibusdam dolor, at molestias
        repellendus eligendi delectus explicabo quod laboriosam aliquid
        voluptates deleniti, assumenda nemo incidunt? Voluptatum quae deleniti
        ipsum nisi illo pariatur, reprehenderit repellendus sunt eum quisquam
        adipisci esse a obcaecati asperiores sapiente et sed ea.
      </p>
      <br />
      <br />
    </div>
  );
}

export default One;
