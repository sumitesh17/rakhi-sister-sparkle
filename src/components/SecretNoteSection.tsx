import { useState } from 'react';
import { Button } from '@/components/ui/button';

interface SecretNoteSectionProps {
  onNext: () => void;
}

const SecretNoteSection = ({ onNext }: SecretNoteSectionProps) => {
  const [currentNote, setCurrentNote] = useState<'bad' | 'good' | null>(null);
  const [showTyping, setShowTyping] = useState(false);

  const startBadMemory = () => {
    setCurrentNote('bad');
    setShowTyping(true);
  };

  const startGoodMemory = () => {
    setCurrentNote('good');
    setShowTyping(true);
  };

  // Demo content - will be replaced with uploaded files
  const badMemoryText = `Maybe something went wrong… maybe I made a mistake… or maybe you misunderstood me—I truly don’t know. But whatever it was, I carry that regret with me every single day.

Because if I were ever asked to list the people I need in my life—the ones without whom a phase of my life would feel empty—you’d be at the very top of that list. Always.

I never wanted to hurt you. Never even imagined you’d feel the way you did. But what’s done is done… and I can’t change the past. What I can do is promise you one thing from my heart: I will never let that happen again. Until on Unless you feel safe at me again and you yourself hugged me .

This made me understand something I hadn’t before—my place in your life, and maybe your place in mine. I’m not saying this with blame or sadness. I know you valued me too. I’ve always believed you kept me in your heart just like I did with you.

But here’s the truth: You’ve never had limits in my world. You’ve never been “just a friend” or “just like a sister.” You were my sister only. I am saying this because i listen to your words in shannu's thing where I will never listen to anyone .The one who brought so many silent, meaningful changes in me. Maybe you didn’t even notice… but I did. And I’m so grateful for them.

About that moment… I know you misunderstood me. I never compared myself to him after you explained. I never tried to take his place. That was never even a thought. I know my place is more than him. 

I never wanted you as my physical support 
The hug i took from you is emotional support. That to I have only you here to take that . 

Yes, I might have whispered a few things—words you didn’t like. For you, maybe they felt like a mistake. But for me, they were just suggestions I will explain  about that words nothing more. No hidden meaning. No expectations. Just words from someone who cares deeply.

I know you wanted to forget all this… maybe even erase it. But the words you said to me—they still echo in my head when I am with you , when I touched you . You may not realize it, but they shattered something inside me.

Do you know what it felt like? Like a mother turning her back on her own son. It felt like that.

You’ve seen movies, right? That pure brother-sister bond—the way they hug each other with trust, safety, love. That night I hugged you and slept—it came from that same place. Nothing else. No other thought. Just pure care.

But for the first time… you misunderstood me so deeply that it felt like the real me had disappeared in your eyes. That hurt more than anything I’ve ever felt.you saw me like a person..... I can't describe it sorry.

I told you once how I treat women. You know my thoughts, my respect, how deeply I value them—not just in words but in my actions.

Still… you saw me in a way I never wanted you to see.

It’s okay. Maybe I did go wrong. And maybe I’ll never be able to fix what was broken. But from today onward, I’ll be careful—because the last thing I ever want is for you to feel unsafe or uncomfortable because of me.

But before I go quiet, I just want you to know: This isn’t an argument. This isn’t justification.

This is simply me—speaking from a place of truth, love, pain, and understanding.

Whatever you decide now, I’ll carry your bond in my heart. That will never change.

Thank you for being honest with me. I know how hard that must’ve been.

I now understand that what happened made you feel extremely uncomfortable. And that matters more than anything else.
Whatever my intentions were — even if they came from a place of pure brotherly love — the moment you felt forced or unsafe, it became wrong. And I accept that fully.

You trusted me. You believed I’d never cross a line.
And knowingly or unknowingly, I did. That hurts me more than anything — because the last thing I’d ever want is for you to feel like a victim around me.

You’re right — you should never feel like someone is pushing you past your own limits.
I should have understood when you felt hesitant. I should’ve stopped. I didn’t.
And for that, I’m sorry — not as an excuse, not for forgiveness, but because you didn’t deserve to go through that.

About Sandeep…
Yes, I got a little emotional. I did feel possessive. I felt like I was losing my place in your life — the place I held so close in my heart.
But that was my mistake — to feel insecure about someone who makes you happy.
I understand now:
What you have with Sandeep is different. It’s special. And it deserves respect.
That doesn't take away what we share  because our bond is different too. And sacred in its own way.

I was never trying to take his place.
But when I saw your attention shift .yes, it hurt. Not because of jealousy… but because I was scared of being left behind.
Still, I understand now ,no one is "taking" your attention. You’re simply giving it to someone you love. And I respect that.

From today, I’ll never try to compare.
I’ll be more aware. More careful.
And most importantly more respectful of what makes you feel safe, comfortable, and loved.


The things you said to literally made doudt myself darshni . Really i did misbehave with you ah or what i didn't understand. I will give just a small explanation don't take in different way , the way i holded or hugged you , the same way i hugged my sister lucky . More that this no gap even . I am not saying you to do this . But you didn't said you are not ok with that . You said you got a victim , I did you bhalavantama to make this . At last also i said you darshni one last hug with whole heart give no other thoughts you made that also without love . You don't like touchy touchy i understand , at last I am your brother ree ( this is reason i said those words , habitat know , adjust know ) it's not comes with meaning I want now you do it's complousry , I means dear sister I am your little brother , i am worried about somethings , I need some hugs which feels me safe and make me normal .please give me . Instead what you understood is what we fighted for . 

Shannu liked in me first thing is every girl with me will safe with me but how can I say her my own sister is not feeling safe at me and she felt like victim . If you want I will show for which words I got hurt also. Literally i felt i misbehaved with a girl that too with my own sister . Wow than this a gift can be given to a brother from his sister . But still it's ok.

You’ve always made me feel like I mattered.
So now, it's my turn to show that I value you, not just by love, but by respecting your space, your choices, and your peace.

Take your time. Feel what you need to feel.
I’m not going anywhere. Not to argue. Not to convince. Just to be there, quietly  with the same love, but with more maturity and understanding.

I promise, from this moment forward,
I will love you the way you want to be loved 
with respect, boundaries, and calmness.

This dark raw side of us mightw hurt you but this need to be cleared from my side.

With all my heart,
YOUR Thambi 
I LOVE YOU SISTER 💗 , MY SISTER 🥺.HOPE YOU UNDERSTAND 😭.`;
  const goodMemoryText = `Hello Sisto Mephisto ( A Marvel Villan Character )😅
How was the rhyming? 😄
Happy Rakshabandhan 💗🫂

I just want to say something — you are my best sister.
Whenever I miss someone who’s very close to me, the first person I come to is you.
Because you make me feel like I’m home. That I belong. That I have someone.
You always say, I am there for you. I am always there for you. You can share anything with me.
But the truth is… you’re the only one I can share with in college.
Even when I mess up, you control your anger — most of the time 😅
Sometimes you burst out, but most of the time you come back and make me feel alright.
I’ve started to understand how much I mean to you through your words always especially when you drank.I used to understand it all through your actions also before. I started capturing you here before anyone did . 
But nowadays, for some reason, I feel like it’s missing.
Yes, you're trying to do best, and I know you haven’t changed intentionally.
But still... 
I miss that innocent version ( my sister version in you ) —
the one who always have the cute smiley face makes everyone laugh .
the one who was lazy like me in doing things
the one who got extremely excited for my small gifts and efforts.
the one who roamed with me with some unknown trust bond
the one who stayed silent when I was angry and later calmly told me the solution.
I miss that Darshni.
Although I like this Darshni too — who is responsible, patience , thoughtful, and helps me understand things.
Somewhere I feel like I’m losing arguments even when I’m right. But for your satisfaction, I let things go and make you win.
At first, I called you sister just for fun… but eventually, you became more than a sister.
We could even call it a mother-like bond — but sorry, I can’t give that name to you.
I can strongly and with lots of love say that you are in my priority list.
I’m saying this from the bottom of my heart.
I love you, Sisto 💗
Now I know you might think, "Abbo, all sollu only!!"
But I really do have reasons for everything I’m saying.
When you cook for all of us — and sometimes I feel like me, Sandeep, and Indra are your kids 😅
And I’m your favorite kid 😁 because you cook separately just for me.
That day onwards, starting with Maggie, and recently when you made dal for me. That made me feel special.
I notice everything, ree.
I don’t know why but I never express everything — the feelings I have for you.
But after that incident, I had to express it because I got to know you feel unloved by everyone except your family. 
You are a totally special person to me.
I love you, my sister. Never ever think like that. I have my type of love always 💖
When I come to you, my mind only says —
I have these things to say, I need to say them.
I need her help, I’ll take it.
I’m suffering with this issue, I need her concern.
I need her to know whether everything is ok or not.
Go Sumitesh. She came outside for you guys. Make her feel comfortable.
Literally, I kept my laziness aside for you.
And one more thing I want to clarify —
I’ll always be happy for you no matter where your life takes you.
I just don’t want to lose you.
I got the time to change some words I said in the past.
You feels like my own sister — no.
You are my only fav sister 💗
Do you remember that one time on a call I asked — can I trust you?
The only reason I asked is because I want you to be my sister for a lifetime.
Not just for these four years of engineering.
You’ve shown me in these three years how much I mean to you as a brother.
So for this final year, just give me a small chance to show how much you mean to me.
Let’s create the best memories with all the love and care you’ve shown me.
Because I live by one simple policy.
The love people give me, I have to give it twice back 💞
I want you to feel the love I’m giving — someday — so that I’ll feel like I fulfilled my responsibility.
That’s it.
And by “that’s it” I don’t mean I’m done.
Even your future responsibilities — I won’t step back from them 🤝
I felt genuinely happy when you mentioned that day- when we were trying to sort things out-and you said, "Sumitesh cares about me. He came for me when I called," before Sandeep proposed to you.
To be honest, after Sandeep proposed, I gave up for a while. I thought maybe my efforts didn't matter anymore. But after some time, something in me couldn't stay away-I started trying again, and this time, I gave even more than before.
I broke all the rules I had set for myself. I began to care for you in ways that went beyond just friendship. I started seeing you like my own sister-in the way worried about you, the way I touched you with concern, the way I asked you things, the way I fought with you, the way I listened to you, and even in the way
I constantly thought about you.
Sometimes, I still can't believe how magically we met. It was like God gifted me the best sister just a day before my birthday. And you-someone I had known for barely a day-gave me the first ever gift of my life.
Yeah, maybe you had help from a few other girls for buying that gift, but still... what more could I ever expect from someone I had just met?
We weren't born together, we don't share the same womb, we're not from the same state, not even the same language. But somehow, it feels like you were meant to be my twin-like we were born together, just in different places.
You came into my life after 16 years, yet it feels like you've been with me forever.
How do I even put into words how deeply I love you as my sister?
I got you after literally 16 years ,the all time , the all love,  the all bond , I can't show in 4 years know... I need to be with you rest of my life .
I want to your blessings for my relationship. I want your father's influence on my kids. I promise I will do everything ritual as your brother if you called me . 
I Going to give one poster, which tells a brother and sister relationship in that movie I want that type bond with you. I really feel you as my own sister thangam.
Onces again Happy Rakshabandhan Sistoo 💗 , I Love you 💗 , with how much care you are tighting this rakhi for me because I need to be safe that much I also need your safety .

From Your Chota Bheem/Sumitesh/ Pichodu/ Little Brother.`;

  if (!currentNote) {
    return (
      <div className="min-h-screen flex items-center justify-center p-8">
        <div className="text-center">
          <h2 className="text-4xl font-bold font-caveat text-pink-accent mb-8 sparkles">
            Time for some memories... 📝
          </h2>
          <Button onClick={startBadMemory} className="btn-magical text-xl">
            Read the Letters ✨
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-8">
      <div className="max-w-3xl paper-letter rounded-lg p-8">
        <div className="text-center mb-6">
          <h3 className="text-3xl font-bold font-caveat text-pink-accent">
            {currentNote === 'bad' ? '💔 Bad Memory' : '💕 Good Memory'}
          </h3>
          <div className="w-6 h-6 bg-pink-accent rounded-full mx-auto mt-2 animate-pulse"></div>
        </div>
        
        <div className="prose prose-lg max-w-none text-gray-medium font-dm-sans">
          {showTyping && (
            <div className="space-y-4 whitespace-pre-wrap leading-relaxed">
              {(currentNote === 'bad' ? badMemoryText : goodMemoryText)
                .split(/\n{2,}/)
                .map((para, idx) => (
                  <p key={idx}>{para.trim()}</p>
                ))}
            </div>
          )}
        </div>

        <div className="text-center mt-8">
          {currentNote === 'bad' ? (
            <Button onClick={startGoodMemory} className="btn-magical">
              We should forget and erase this part 🗑️
            </Button>
          ) : (
            <Button onClick={onNext} className="btn-magical">
              We need to remember this part 💖
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default SecretNoteSection;