<script setup lang="ts">
import DefaultLayout from "@/Layouts/DefaultLayout.vue";
import { Head, usePage } from "@inertiajs/vue3";
import { onMounted, ref, watch } from "vue";

defineProps({
    canLogin: Boolean,
    canRegister: Boolean,
    laravelVersion: String,
    phpVersion: String,
});

type Session = {
    title: string;
    description: string;
    image: string;
    calendly: string;
    price: number;
};

const sessions = ref<Session[]>([
    {
        title: "30 Minute Session",
        description:
            "A 30 minute video call. Enough time to get to know each other and discuss your goals.",
        image: "/images/sessions/30.png",
        calendly: "https://calendly.com/green-mindful-coach/30-minute-session",
        price: 50,
    },
    {
        title: "60 Minute Session",
        description:
            "A 60 minute video call. Enough time to get to know each other and discuss your goals.",
        image: "/images/sessions/60.png",
        calendly: "https://calendly.com/green-mindful-coach/60-minute-session",
        price: 100,
    },
    {
        title: "2 Hours In Person",
        description:
            "A 2 hour in person session. We'll go over any current conditions you have, your eating habits, and form a plan to get you on track.",
        image: "/images/sessions/120.png",
        calendly: "https://calendly.com/green-mindful-coach/90-minute-session",
        price: 150,
    },
]);

const sessionElement = ref<HTMLElement | null>(null);
onMounted(() => {
    if (!sessionElement.value) return;
    sessionElement.value.scrollIntoView({ behavior: "smooth" });
});
</script>

<template>
    <Head title="Welcome" />

    <DefaultLayout>
        <div class="relative w-full">
            <img class="mx-auto" src="/images/food.png" />
            <div
                class="absolute grid place-content-center sm:gap-3 lg:gap-8 overflow-hidden w-[35%] aspect-square left-1/2 top-1/2 translate-x-[-42%] translate-y-[-55%] rounded-full text-white text-center p-4 bg-[#2b6e54]/90"
            >
                <h2 class="px-3 text-xl sm:text-3xl md:text-3xl lg:text-5xl">
                    Plant based healing
                </h2>
                <p class="hidden md:block px-3 text-sm md:text-lg">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
            </div>
        </div>

        <div class="bg-[#2b6e54]">
            <div class="h-24 w-full bg-gradient-to-b from-white to-[#2b6e54]" />
            <div class="max-w-5xl mx-auto px-4 pb-16 text-white text-lg">
                <section>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    efficitur gravida enim, eget euismod erat tincidunt in.
                    Praesent non pretium nunc. Nunc tempus mattis diam, sit amet
                    semper mi vestibulum sit amet. Fusce sed elementum sem.
                    Proin dictum, risus maximus euismod accumsan, tortor mi
                    dignissim ex, quis condimentum ligula arcu vitae nisi. Cras
                    at magna et lectus volutpat vestibulum. Morbi fringilla sit
                    amet mauris non pulvinar. Vivamus tincidunt augue metus, a
                    viverra est interdum non. Cras sed eros lacus. Morbi
                    pharetra dui sed ligula pulvinar, id maximus ligula
                    consequat. Pellentesque congue lacus lacus, a facilisis diam
                    fringilla eu. Pellentesque non neque auctor, dictum diam
                    accumsan, rutrum nulla. Nullam felis nisl, tempor ac est ac,
                    lobortis egestas sem. Aliquam ut pulvinar neque. Duis a
                    lacinia turpis, a tempor orci. Etiam in iaculis mauris. Sed
                    quis dolor ipsum. Suspendisse ac sem nisi. In hac habitasse
                    platea dictumst. Phasellus sem ipsum, vestibulum nec quam
                    vel, sodales laoreet lectus. Fusce auctor nibh enim, vel
                    aliquam orci bibendum sed. Etiam ultricies arcu nisi,
                    feugiat laoreet velit molestie pretium. Quisque malesuada
                    ultrices nibh et pharetra. Curabitur sagittis justo nisi,
                    vel tincidunt eros tincidunt et. Etiam lacinia sit amet
                    dolor ut laoreet. Suspendisse pellentesque euismod metus, eu
                    varius nisi interdum ut. Cras quis semper est, sed
                    scelerisque lacus. In maximus, metus eget sollicitudin
                    convallis, quam purus aliquam massa, eget suscipit urna
                    tortor id mauris. Vivamus mattis neque in fermentum tempus.
                    Sed dapibus dignissim lacus vel scelerisque. Cras mollis
                    justo vel sodales viverra. Vestibulum ante ipsum primis in
                    faucibus orci luctus et ultrices posuere cubilia curae; Nam
                    hendrerit odio quis consequat fringilla. Vestibulum eget
                    pretium justo. Ut at dignissim velit, ac pellentesque odio.
                    Donec augue odio, lacinia ut tristique eget, elementum ac
                    felis. Fusce tempus nec mi in dignissim. Mauris ultrices ex
                    a viverra congue. Aenean ornare, felis id lacinia vulputate,
                    erat odio congue nibh, eget pretium velit risus at ex.
                    Vestibulum hendrerit mauris eu ex tincidunt, dignissim
                    efficitur sapien varius. Maecenas risus enim, dapibus mollis
                    ipsum vel, consequat congue erat. Morbi laoreet id dui
                    dictum hendrerit. Maecenas sed maximus massa. Praesent nec
                    convallis leo. Aenean non hendrerit mauris, in fermentum
                    augue. Pellentesque porttitor sem felis, sed imperdiet neque
                    ultricies in. Vestibulum dui nibh, rutrum a magna vel,
                    facilisis rhoncus neque. Vestibulum ante ipsum primis in
                    faucibus orci luctus et ultrices posuere cubilia curae;
                    Aenean blandit, ex et tristique vulputate, eros mi dictum
                    mauris, vitae aliquam ante magna in dui. Ut eleifend nisi
                    eros, vel placerat nibh interdum eu. Phasellus eget cursus
                    risus. Pellentesque volutpat consectetur ipsum et tincidunt.
                    Suspendisse venenatis lacus sapien, et sollicitudin nisl
                    interdum vel. Praesent tristique luctus dolor auctor
                    vestibulum. Praesent vestibulum quam eros, a interdum eros
                    efficitur vitae. Aenean tristique libero id magna tempus
                    tincidunt.
                </section>

                <!-- This is the #services section -->
                <section
                    ref="sessionElement"
                    class="py-6 grid md:grid-cols-3 gap-8 md:text-center"
                >
                    <h2 class="text-3xl font-bold col-span-full">
                        Book a session
                    </h2>
                    <a
                        v-for="session in sessions"
                        :key="session.title"
                        class="mx-auto p-4 grid grid-cols-3 md:grid-cols-1 items-start gap-4 bg-white border-2 border-green-700 rounded-lg shadow-md hover:shadow-xl hover:scale-105 transition-all cursor-pointer group text-[#2b6e54]"
                        :href="session.calendly"
                    >
                        <div class="col-span-1 grid place-content-center">
                            <img
                                :src="session.image"
                                :alt="session.title"
                                class="aspect-square rounded-lg shadow-lg border-2 border-gray-300/50"
                            />
                        </div>

                        <h3 class="col-span-2 md:col-span-1 grid">
                            <span class="text-2xl font-bold">{{
                                session.title
                            }}</span>
                            <span class="text-lg font-light"
                                >${{ session.price }}</span
                            >
                        </h3>

                        <div
                            class="col-span-full md:min-h-[200px] flex items-end"
                        >
                            <p class="text-lg">
                                {{ session.description }}
                            </p>
                        </div>
                    </a>
                </section>
            </div>
        </div>
    </DefaultLayout>
</template>
