<script>
import Container from '@/components/app/Container.vue';

export default {
  components: {
    Container,
  },
};
</script>
<template>
  <Container>
    <main class="min-h-screen py-20">
      <h1 class="heading mb-3">Our Privacy Policy</h1>
      <p class="paragraph mb-3">
        League-Wiki is a trademark of League-Wiki. This privacy policy explains
        how our organization uses the personal data we collect from you when you
        use our website and / or one of our partners' websites.
      </p>
      <ul class="list-disc list-inside ml-2 mb-3">
        <li>What information do we collect?</li>
        <li>How do we collect your information?</li>
        <li>How do we use your data?</li>
        <li>How do we store your data?</li>
        <li>Marketing</li>
        <li>What are your data protection rights?</li>
        <li>What are cookies?</li>
        <li>How do we use cookies?</li>
        <li>What types of cookies do we use?</li>
        <li>How to handle your cookies</li>
        <li>Privacy policy on other websites</li>
        <li>Changes to our privacy policy</li>
        <li>How to contact us</li>
        <li>How to contact the competent authorities</li>
      </ul>

      <div class="mb-3">
        <h2 class="subheading">What information do we collect?</h2>
        <p class="paragraph">We collect the following personal information:</p>
        <ul class="list-disc list-inside ml-2">
          <li>Name, E-mail address</li>
          <li>Your IP address to streamline the use of our websites.</li>
          <li>
            If you contact us or one of our partners, we store correspondence or
            comments, which may contain personal information, to provide better
            service if you contact us again.
          </li>
        </ul>
      </div>

      <div class="mb-3">
        <h2 class="subheading">How do we use your data?</h2>
        <p class="paragraph">We collect your data so that we can:</p>
        <ul class="list-disc list-inside ml-2">
          <li>Maintain contact with our customers.</li>
          <li>
            Develop our services and products, by understanding how you as a
            customer experience our products, also through this develop new
            products and services.
          </li>
          <li>Prevent misuse of our products and services.</li>
          <li>
            To be able to fulfill legal obligations vis-à-vis current
            legislation. (If you accept, our company will share your information
            with our partner companies so that they can maintain the
            functionality of this website and prevent abuse).
          </li>
        </ul>
      </div>
      <div class="mb-3">
        <h2 class="subheading">Hur lagrar vi dina data?</h2>
        <p class="paragraph">
          Vårt företag lagrar dina data säkert inom länder godkända enligt GDPR.
          Vi kan komma att överföra personuppgifter till länder utanför
          EU/EES,om någon av våra samarbetspartners eller leverantörer befinner
          sig där. Vid eventuell överföring av personuppgifter till ett land
          utanför EU/EES, kommer vi vidta åtgärder så detta sker på säkert och
          lagligt sätt.
        </p>
        <p class="paragraph">
          Vårt företag kommer att behålla din personuppgifter så länge de är
          nödvändiga för de ändamål de samlades in för(eller som krävs på grund
          av lagkrav). När denna tidsperiod har löpt ut tar vi bort din data på
          så sätt att den inte går att återskapa.
        </p>
      </div>
      <div class="mb-3">
        <h2 class="subheading">What are your data protection rights?</h2>
        <p class="paragraph mb-3">
          Our company wants to make sure that you are fully aware of all your
          rights to data protection. Each user is entitled to the following:
        </p>
        <ul class="ml-2">
          <li>
            <b>The right to rectification</b> - You have the right to request
            that our company correct any information that you believe is
            incorrect. You also have the right to request our company to
            complete information that you consider to be incomplete.
          </li>

          <li>
            <b>The right to delete</b> - You have the right to request that our
            company delete your personal data under certain conditions.
          </li>
          <li>
            <b>The right to object to processing</b> - You have the right to
            object to our company's processing of your personal data, under
            certain conditions.
          </li>
          <li>
            <b>The right to data portability</b> - You have the right to request
            that our company transfer data that we have collected to another
            organization, or directly to you, under certain conditions.
          </li>
        </ul>
      </div>
      <div class="mb-3">
        <h2 class="subheading">Cookies?</h2>
        <p class="paragraph">
          To get critical information about our visitors' behavior, we use
          Simple Analytics. This analysis software gives us knowledge about our
          visitors in general, but not about individuals per se, as it does not
          track visitors and does not store any personally identifiable
          information. Go to their documentation to find out what Simple
          Analytics collects (and most importantly what they do not).
        </p>
      </div>
      <div class="mb-3">
        <h2 class="subheading">Privacy policy for other websites</h2>
        <p class="paragraph">
          Our company website contains links to other websites. Our privacy
          policy only applies to our website, so if you click on a link to
          another website, you should read their privacy policy.
        </p>
      </div>
      <div class="mb-3">
        <h2 class="subheading">Changes of our privacy policy</h2>
        <p class="paragraph">
          Our company maintains its privacy policy under regular review and
          places updates on this website.
        </p>
      </div>
      <div class="mb-3">
        <h2 class="subheading">How to contact us</h2>
        <p class="paragraph">
          If you have any questions about our company's privacy policy, the
          information we hold about you, or if you wish to exercise any of your
          data protection rights, do not hesitate to contact us.
        </p>
        <ul>
          <li>
            Send an email to us:
            <a href="mailto:contact@league-wiki.com" class="underline"
              >contact@league-wiki.com</a
            >
          </li>
          <li>
            Call us:
            <a href="tel:00000000" class="underline">+46 00 000 00 00</a>
          </li>
        </ul>
      </div>
    </main>
  </Container>
</template>

<style lang="postcss" scoped>
h2 {
  @apply text-xl;
}
p,
li {
  @apply text-lg;
}
</style>
