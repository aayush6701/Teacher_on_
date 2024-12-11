// components/StudentComponent.js
export default function StudentComponent() {
    return (
        <div
            style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                height: '100vh',
                backgroundColor: 'white',
                flexDirection: 'column',
                padding: '20px',
            }}
        >
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    gap: '20px',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                    width: '100%',
                }}
            >
                {/* Sub-component 1 */}
                <div
                    style={{
                        position: 'relative',
                        width: '100%',
                        maxWidth: '627px',
                        height: 'auto',
                        backgroundColor: '#7B82CA',
                        borderRadius: '20px',
                        display: 'flex',
                        flexDirection: 'column',
                        padding: '20px',
                    }}
                >
                    {/* Overlapping element */}
                    <div
                        style={{
                            position: 'absolute',
                            width: '96%', // Responsive width
                            height: '95%', // Responsive height
                            backgroundColor: '#C4C8EE',
                            borderRadius: '20px',
                            bottom: '25px',
                            right: '25px',
                            zIndex: 0,
                        }}
                    ></div>

                    {/* Text */}
                    <p
                        style={{
                            color: '#0F283C',
                            fontFamily: 'Gilroy-Black, sans-serif',
                            fontSize: '50px',
                            fontWeight: '400',
                            lineHeight: '63.1px',
                            textAlign: 'left',
                            textUnderlinePosition: 'from-font',
                            textDecorationSkipInk: 'none',
                            zIndex: 1,
                        }}
                    >
                        Student
                    </p>

                    {['Teachers', 'Online Teachers', 'Home Teachers', 'Assignment Help'].map((text, index) => (
                        <div
                            key={index}
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                width: '100%',
                                maxWidth: '552px',
                                height: '66px',
                                backgroundColor: 'white',
                                borderRadius: '10px',
                                marginTop: '20px',
                                padding: '10px',
                                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                                zIndex: 2,
                            }}
                        >
                            <p
                                style={{
                                    fontFamily: 'Gilroy-SemiBold, sans-serif',
                                    fontSize: '22px',
                                    fontWeight: '400',
                                    lineHeight: '26.95px',
                                    textAlign: 'left',
                                    color: 'black',
                                }}
                            >
                                {text}
                            </p>
                            <div
                                style={{
                                    width: '50px',
                                    height: '50px',
                                    backgroundColor: '#7B82CA',
                                    borderRadius: '50%',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                }}
                            >
                                <img
                                    src="/Vector_a.png"
                                    alt={text}
                                    style={{
                                        width: '21px',
                                        height: '16px',
                                        objectFit: 'contain',
                                    }}
                                />
                            </div>
                        </div>
                    ))}
                </div>

                {/* Sub-component 2 */}
                <div
                    style={{
                        position: 'relative',
                        width: '100%',
                        maxWidth: '627px',
                        height: '511px',
                        backgroundColor: '#72B482',
                        borderRadius: '20px',
                        display: 'flex',
                        alignItems: 'flex-start',
                        flexDirection: 'column',
                        padding: '20px',
                    }}
                >
                    {/* Overlapping element */}
                    <div
                        style={{
                            position: 'absolute',
                            width: '96%', // Responsive width
                            height: '95%', // Responsive height
                            backgroundColor: '#9DDDAB',
                            borderRadius: '20px',
                            right: '25px',
                            bottom: '25px',
                            zIndex: 0,
                        }}
                    ></div>

                    {/* Text */}
                    <p
                        style={{
                            color: '#0F283C',
                            fontFamily: 'Gilroy-Black, sans-serif',
                            fontSize: '50px',
                            fontWeight: '400',
                            lineHeight: '63.1px',
                            textAlign: 'left',
                            textUnderlinePosition: 'from-font',
                            textDecorationSkipInk: 'none',
                            zIndex: 1,
                        }}
                    >
                        Teaching Jobs
                    </p>

                    {['Teachers', 'Online Teachers', 'Home Teachers', 'Assignment Help'].map((text, index) => (
                        <div
                            key={index}
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                maxWidth: '552px',
                                width: '100%',
                                height: '66px',
                                backgroundColor: 'white',
                                borderRadius: '10px',
                                marginTop: '20px',
                                padding: '10px',
                                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                                zIndex: 2,
                            }}
                        >
                            <p
                                style={{
                                    fontFamily: 'Gilroy-SemiBold, sans-serif',
                                    fontSize: '22px',
                                    fontWeight: '400',
                                    lineHeight: '26.95px',
                                    textAlign: 'left',
                                    color: 'black',
                                }}
                            >
                                {text}
                            </p>
                            <div
                                style={{
                                    width: '50px',
                                    height: '50px',
                                    backgroundColor: '#72B482',
                                    borderRadius: '50%',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                }}
                            >
                                <img
                                    src="/Vector_a.png"
                                    alt={text}
                                    style={{
                                        width: '21px',
                                        height: '16px',
                                        objectFit: 'contain',
                                    }}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
