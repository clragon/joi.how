import { Link, RouteComponentProps } from '@reach/router'
import React from 'react'
import { OutboundLink } from 'react-ga'
import { ReactComponent as Logo } from '../../assets/logo.svg'
import { SettingsControls } from '../../features/settings/SettingsControls/SettingsControls'
import { Cookies } from './Cookies'
import './Greeter.css'
import { ReleaseNotes } from './ReleaseNotes/ReleaseNotes'

export function GreeterPage(props: RouteComponentProps) {
  return (
    <div className="GreeterPage">
      <div className="settings-row">
        <Logo className="GreeterPage__logo" />
        <h1>
          <abbr title="Jack Off Instructions">JOI</abbr>.how
        </h1>
      </div>
      <p>
        Select your settings, and this app will guide ya' thru a jack-off session. You can adjust most of the aspects of the game, as well
        as select some porn to help with "motivation". It's all pulled from <a href="https://e621.net">E621.net</a>.{' '}
        <strong>You are responsible for what you choose to look at.</strong>
      </p>
      <p>
        <em>This app is meant for adults only, and should not be used by anyone under the age of 18.</em>
      </p>
      <Cookies />
      <div className="GreeterPage__settings">
        <SettingsControls />
      </div>
      <OutboundLink className="no-underline" target="_blank" eventLabel="Outbound.Pawflix" to="https://pawflix.net">
        <p className="callout">
          <h2>
            Prefer stroking with music? <img src="https://cdn.discordapp.com/emojis/750074504528527421.gif?v=1" />
          </h2>{' '}
          Check out PawFlix.net for furry fap hero videos set to music, (it's a <em>whole porn-tube site</em> just for that, made by a
          friend of joi.how!) <strong>then come back here when you'd rather be told what to do and leave it up to chance.</strong> ;)
        </p>
      </OutboundLink>
      <ReleaseNotes />
      <p>This app is provided without express promise of support.</p>
      <section>
        Some rules to keep to:
        <ul>
          <li>Keep your strokes to the pace of the circle in the centre of the screen.</li>
          <li>Stroke using only the hand(s) shown in the top status bar.</li>
          <li>Only focus on the porn on screen.</li>
          <li>Watch out for events announced on the right side.</li>
        </ul>
      </section>
      <div className="settings-row GreeterPage__actions">
        <Link className="GreeterPage__begin settings-button" to="/play">
          Begin
        </Link>
      </div>
    </div>
  )
}
