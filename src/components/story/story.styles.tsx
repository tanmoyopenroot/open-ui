import { css } from 'emotion';

type IStoryStyles = {
  display: string;
  controller: string;
  text: string;
}

export default (): IStoryStyles => ({
  display: css({
    width: 'calc(100% - 350px)',
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    padding: 20,
    position: 'absolute',
    top: 20,
    left: 20,
    bottom: 20,
  }),
  controller: css({
    position: 'absolute',
    top: 20,
    right: 20,
    bottom: 20,
    display: 'flex',
    flexDirection: 'column',
    width: 250,
    borderRadius: 6,
    backgroundColor: '#F7F7F7',
    padding: 20,
    textAlign: 'left',
  }),
  text: css({
    fontWeight: 600,
    textTransform: 'uppercase',
    lineHeight: 1.5,
    margin: '25px 0px',
    color: '#525f7f',
    borderBottom: '1px solid #525f7f',
    paddingBottom: 10,
    fontSize: '80%',
  }),
});
