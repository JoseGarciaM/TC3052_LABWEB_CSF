import {useEffect} from 'react';
import useTranslation from 'next-translate/useTranslation';
import {authAnonymously} from 'lib/firebase/client';
import {useUser} from 'contexts/userContext';
import {Logotype} from 'components/svg/branding';
import Header from 'components/ui/Header';

export default function Landing(props) {
  const {
    children,
    headerWidth
  } = props;

  const {t} = useTranslation();

  const {loadingUser, user} = useUser();
  useEffect(() => {}, [loadingUser, user]);
  const anonymouslyLogIn = () => {
    authAnonymously().then(user).catch((err) => {
      console.log(err);
    });
  };

  return (
    <>
      {user === null && (
        <main>
          <div className="relative min-h-screen flex flex-col justify-center items-center space-y-12">
            <Logotype height="150"/>
            <div className="prose prose-lg pro text-center px-10">
              <h1 className="uppercase">
                {t('common:LegalWarningTitle')}
              </h1>
              <p>
                {t('common:LegalWarningParagraph')}
              </p>
            </div>
            <button
              type="button"
              onClick={anonymouslyLogIn}
              className="btn-lg btn-px-4xl btn-primary uppercase tracking-wider"
            >
              {t('common:LegalWarningCTAText')}
            </button>
          </div>
        </main>
      )}
      {user && (
        <>
          <Header
            headerWidth={headerWidth}
          />
          <main>
            {children}
          </main>
        </>
      )}
    </>
  )
}
